const Hotel = require('../models/hotel');
require('../models/reservation');

module.exports = {
    show
}

function show(req, res) {
    Hotel.findById(req.params.id)
        .populate('reservations')
        .exec((err, hotel) => {
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
                name: req.user.name
            });
        });
}