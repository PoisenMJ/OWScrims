var mongoose = require('mongoose');

var scrimSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    team_1: {
        type: [{
            battletag: { type: String },
            role: { type: String },
            sr: { type: Number },
            image: { type: String }
        }],
        default: []
    },
    team_2: {
        type: [{
            battletag: { type: String },
            role: { type: String },
            sr: { type: Number },
            image: { type: String }
        }],
        default: []
    },
    player_count: {
        type: Number,
        default: 0
    },
    best_of: {
        type: Number,
        enum: [1, 3, 5],
        required: true
    },
    maps: {
        type: [String],
        required: true
    },
    sr_lower: {
        type: Number,
        required: true
    },
    sr_higher: {
        type: Number,
        required: true
    },
    region: {
        type: String,
        required: true
    }
})

scrimSchema.methods.joinTeam1 = function(battletag, role, roleSR, image) {
    var sr = parseInt(roleSR);
    if( sr <= this.sr_higher && sr >= this.sr_lower ){
        var team1 = this.team_1;
        var numRole = 0;
        for(var i = 0; i < team1.length; i++){
            if(team1[i].role === role) numRole += 1;
        }
        if(numRole === 2) return false;
        else {
            this.team_1 = [...this.team_1, { 
                battletag: battletag,
                role: role,
                sr: roleSR,
                image: image
            }];
            return true;
        }
    } else return false;
}

var scrim = mongoose.model('scrim', scrimSchema);
module.exports = scrim;