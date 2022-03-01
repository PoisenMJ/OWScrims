var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    battletag: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ''
    },
    tankSR: {
        type: Number,
        default: 0
    },
    dpsSR: {
        type: Number,
        default: 0
    },
    supportSR: {
        type: Number,
        default: 0
    }
});

userSchema.statics.battletagToID = function(battletag) {
    return this.findOne({ battletag: battletag });
}
userSchema.statics.setProfile = function(battletag, tankSR, dpsSR, supportSR, image){
    return this.updateOne({ battletag: battletag }, { $set: { tankSR, dpsSR, supportSR, image } } );
}

var user = mongoose.model('user', userSchema);
module.exports = user;