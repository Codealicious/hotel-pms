const Hotel = require('../models/hotel');
const Guest = require('../models/guest');
const Reservation = require('../models/reservation');
require('../models/reservation');

module.exports = {
    show
}

function show(req, res) {
    
    Reservation.find({propertyId: req.params.id})
        .populate('primaryGuest') 
        .exec((err, results) => {
  
         Hotel.findById(req.params.id, (err, hotel) => {

            console.log("Hotel info: " + hotel);
            console.log("results are: " + results);

            res.render('hotels/show', {
                title: `Hotel: ${hotel.name}`,
                links: [
                    'siteWide.css',
                    'show.css'
                ],
                scripts: [
                    'hotels.js'
                ],
                hotel,
                results,
                name: req.user.name
            });
         });
       
    });        
}