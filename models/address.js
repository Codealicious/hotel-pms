const mongoose = require('mongoose');

var addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
});

module.exports = addressSchema;
