const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var reservationSchema = new Schema({
    primaryGuest: {
        type: Schema.Types.ObjectId,
        ref: 'Guest'
    },
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    room: String,
    arrival: String,
    departure: String
});

module.exports = mongoose.model('Reservation', reservationSchema);
