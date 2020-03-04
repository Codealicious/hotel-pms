const mongoose = require('mongoose');
const address = require('./address');

var hotelSchema = new mongoose.Schema({
    name: String,
    address,
    rooms: [mongoose.Schema.Types.ObjectId],
    reservations: [mongoose.Schema.Types.ObjectId] 
});

module.exports = mongoose.model('Hotel', hotelSchema);