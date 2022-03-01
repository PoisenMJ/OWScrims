var express = require('express');
var router = express.Router();
var ow = require('overwatch-stats-api');
var User = require('../models/user');
var { authCheck } = require('../middleware/authCheck');

router.get("/:battletag", async (req, res, next) => {
    var urlBattletag = req.params.battletag;
    try {
        var stats = await ow.getAllStats(urlBattletag, 'pc');
        var rank = stats.rank;
        var tankSR = rank.tank ? parseInt(stats.rank.tank.sr) : 0;
        var dpsSR = rank.damage ? parseInt(stats.rank.damage.sr) : 0;
        var supportSR = rank.support ? parseInt(stats.rank.support.sr) : 0;

        var originalBattletag = urlBattletag.replace('-', '#');
        await User.setProfile(originalBattletag,
            tankSR, dpsSR, supportSR, stats.iconURL);

        return res.json({ success: true });
    } catch (err) {
        return res.json({ success: false, message: "Profile Private." })
    } 
});

module.exports = router;