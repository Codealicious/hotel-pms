const mongoose = require('mongoose');
const address = require('./address');

var hotelSchema = new mongoose.Schema({
    name: String,
    address,
    phone: {
        type: String,
        default: 0
    },
    rooms: [String],
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation'
    }] 
});

module.exports = mongoose.model('Hotel', hotelSchema);