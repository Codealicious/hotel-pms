const mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
    number: Number,
    type: String,
    description: String,
    features: [String],
    availability: [Date]
});

module.exports = mongoose.model('Room', roomSchema);
