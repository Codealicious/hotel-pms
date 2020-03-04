const mongoose = require('mongoose');

var reservationSchema = new mongoose.Schema({
    rooms: [mongoose.Schema.Types.ObjectId],
    guests: [mongoose.Schema.Types.ObjectId],
    property: {
        type: mongoose.Schema.Types.OjectId,
        ref: 'Hotel'
    }
});

module.exports = mongoose.model('Reservation', reservationSchema);