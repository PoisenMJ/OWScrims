var mongoose = require('mongoose');

const emptyPlayer = {
    battletag: { type: String },
    role: { type: String },
    sr: { type: Number },
    image: { type: String }
};
const emptyTeam = {
    slot1: {},
    slot2: {},
    slot3: {},
    slot4: {},
    slot5: {},
    slot6: {}
};

var scrimSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    team_1: {
        type: emptyTeam,
        default: {
            slot1: null,
            slot2: null,
            slot3: null,
            slot4: null,
            slot5: null,
            slot6: null
        }
    },
    team_2: {
        type: emptyTeam,
        default: {
            slot1: null,
            slot2: null,
            slot3: null,
            slot4: null,
            slot5: null,
            slot6: null
        }
    },
    player_count: {
        type: Number,
        default: 0
    },
    best_of: {
        type: String,
        enum: ['BO1', 'BO3', 'BO5'],
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

scrimSchema.methods.joinTeam1 = function(battletag, slot, roleSR, image) {
    var sr = parseInt(roleSR);
    if( sr <= this.sr_higher && sr >= this.sr_lower ){
        var team1 = this.team_1;
        if(team1[slot] !== null) return false;
        else {
            this.team_1[slot] = { 
                battletag: battletag,
                sr: roleSR,
                image: image
            };
            this.player_count += 1;
            return true;
        }
    } else return false;
}

var scrim = mongoose.model('scrim', scrimSchema);
module.exports = scrim;