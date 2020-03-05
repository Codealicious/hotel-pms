const Reservation = require('../models/reservation');
const Hotel = require('../models/hotel');


module.exports = {
    new: newOne,
    show,
    create
}

function newOne(req, res) {
    Hotel.findById(req.params.id, (err, hotel) => {
        res.render('reservations/new', {
            title: "Reservation | New",
            links: [
                'siteWide.css',
                'newReservation.css'
            ],
            hotel,
            scripts: null,
        });
    });
}

function show(req, res) {

}

function create(req, res) {
    
}