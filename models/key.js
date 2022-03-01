var mongoose = require('mongoose');

var keySchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    }
});

var key = mongoose.model('key', keySchema);

module.exports = key;