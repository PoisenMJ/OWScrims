var express = require('express');
var router = express.Router();
var { authCheck } = require('../middleware/authCheck');
var User = require('../models/user');

router.post("/profile", authCheck, (req, res, next) => {
    User.findOne({battletag: req.body.user}).then((user, err) => {
        if (err) 
            return res.json({success: false});
        
        if (user) {
            return res.json({
                success: true,
                tankSR: user.tankSR,
                dpsSR: user.dpsSR,
                supportSR: user.supportSR,
                image: user.image
            })
        }
    })
});

module.exports = router;

