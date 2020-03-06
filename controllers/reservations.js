const Reservation = require('../models/reservation');
const Hotel = require('../models/hotel');
const Guest = require('../models/guest');

module.exports = {
    new: newOne,
    show,
    create
}

function newOne(req, res) {
    Hotel.findById(req.params.id, (err, hotel) => {
        res.render('reservations/new', {
            title: "Reservation | New",
            error: req.params.error === "null" ? false : true,
            links: [
                'siteWide.css',
                'newReservation.css'
            ],
            user: req.body.user ? req.body.user : "",
            hotel,
            scripts: null,
        });
    });
}

function show(req, res) {

}

function create(req, res) {


    Hotel.findById(req.params.id, (err, hotel) => {
        
        let currGuest = {};
        let reservation = {};
    
        if(req.body.user) {
            Guest.findById(req.body.user, (err, guest) => {
                currGuest = guest;
            });
        } else {
            currGuest = buildGuest(req.body);
            currGuest.address = buildAddress(req.body);
            currGuest.paymentMethod = buildPaymentInfo(req.body);
            currGuest.reservations = [];
            currGuest = new Guest(currGuest);
        }
    
        reservation.primaryGuest = currGuest._id
        reservation.room = req.body.room;
        reservation.arrival = req.body.arrival;
        reservation.departure = req.body.departure;
        reservation.propertyId = hotel._id;
        reservation = new Reservation(reservation);

        reservation.save((err, result) => {

            console.log("Result of saving res: " + result);

            hotel.reservations.push(result);
            currGuest.reservations.push(result);

            hotel.save((err) => {
                currGuest.save((err) => {
                    res.redirect(`/hotels/${hotel._id}`);
                });
            });
        });
    });
}

function buildAddress(payload) {

    let address = {};

    address.street = payload.street;
    address.city = payload.city;
    address.state = payload.state;
    address.zip = payload.zip

    return address;
}

function buildGuest(payload) {

    let guest = {};

    guest.title = payload.title;
    guest.firstName = payload.firstName;
    guest.lastName = payload.lastName;
    guest.phone = payload.phone;
    guest.email = payload.email;

    return guest;
}

function buildPaymentInfo(payload) {

    let payment = {};

    payment.ccNumber = payload.ccNumber;
    payment.cvv = payload.cvv;
    payment.exp = payload.exp;

    return payment;
}