var express = require('express');
var router = express.Router();
var axios = require('axios');
var nJwt = require('njwt');
var Key = require('../models/key');
var User = require('../models/user');
var secureRandom = require('secure-random');

// GET BATTLETAG (USING ACCESS TOKEN) -> LOGIN -> GET JWT
router.post('/login', (req, res, next) => {
    var token = req.body.token;
    var url = `${process.env.BNET_URI}/oauth/userinfo`;
    axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        
        var battletag = response.data.battletag;
        User.findOne({ battletag: battletag }).then((user, err) => {
            if(err) return res.json({ battletag: '' })
            // IF NEW USER SAVE INTO DATABASE
            // THEN CREATE AND SAVE TOKEN SIGNING KEY
            if(!user){
                var newUser = new User({ battletag: battletag });
                newUser.save();

                var signingKey = secureRandom(256, {type: 'Buffer'});
                var newKey = new Key({ user: battletag, key: signingKey.toString('base64') });
                newKey.save();
                
                // CREATE JWT
                var jwt = nJwt.create({ scope: 'user' }, signingKey);
                var token = jwt.compact();

                return res.json({ battletag, token });
            } else {
                var signingKey = secureRandom(256, {type: 'Buffer'});
                Key.updateOne({ user: battletag }, { $set: { key: signingKey.toString('base64') } }).then((updated, err2) => {
                    if(err2) return res.json({ battletag: '', token: '' })
                    // CREATE JWT
                    var jwt = nJwt.create({ scope: 'user' }, signingKey);
                    var token = jwt.compact();
                    return res.json({ battletag, token });
                })
            }
        })


    }).catch(err => {
        return res.json({ battletag: '', token: '' })
    })
})

router.post('/check-token', (req, res, next) => {
    var battletag = req.body.user;
    var token = req.body.token;

    Key.findOne({ user: battletag }, (err, key) => {
        if(err) return res.json({ success: false });
        if(!key) return res.json({ success: false });
        else {
            var signingKey = Buffer.from(key.key, 'base64');
            nJwt.verify(token, signingKey, function(err, verifiedJwt){
                if(err) return res.json({ success: false });
                if(verifiedJwt.body.scope === "user") return res.json({ success: true });
                else return res.json({ success: false });
            })
        }
    })
})

module.exports = router;