const mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
    number: Number,
    description: String,
    features: [String]
});

module.exports = mongoose.model(roomSchema);