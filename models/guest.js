const mongoose = require('mongoose');
const address = require('./address');

var paymentSchema = new mongoose.Schema({
    ccNumber: {
        type: Number,
        min: 13,
        max: 19
    },
    cvv: {
        type: Number,
        min: 3,
        max: 3
    },
    exp: {
        type: String,
        match: /[0-1][1-9]\/\d\d/
    }
});

var guestSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ''
    },
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    addresses: [address],
    paymentMethods: [paymentSchema]
});


module.exports = mongoose.model('Guest', guestSchema);


