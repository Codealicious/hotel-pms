require('dotenv').config();
require('./config/database');
const Hotel = require('./models/hotel');
const data = require('./data');

console.log(" Creating Hotels..... ")

Hotel.deleteMany({})
.then(() => {
    return Hotel.create(data.hotels);
})
.then(() => {
    process.exit();
})
.catch((err) => {
    console.log("=========== Could Not Create Hotels ===========");
    console.log(err);
});