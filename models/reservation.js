const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var reservationSchema = new Schema({
    primaryGuest: {
        type: Schema.Types.ObjectId,
        ref: 'Guest'
    },
    room: { 
        type: Schema.Types.ObjectId,
         ref: 'Room'
    },
    additonalGuests: [String],
    arrival: Date,
    departure: Date
});

module.exports = mongoose.model('Reservation', reservationSchema);
