// var Hotel = require('../models/hotel');

module.exports = {
    index
}

function index(req, res) {
    console.log(req.params , "We made it here" )
    res.render('hotels/index', {
        title: "Hotels | Home",
        links: [
            'siteWide.css',
            'homePage.css'
        ],
        scripts: [
            'hotels.js'
        ],
        hotels: [
            {name: 'Hyatt', id: 0},
            {name: 'Marriot', id: 1},
            {name: 'Hard Rock', id: 2},
            {name: 'Kimpton', id: 3}
        ],
        name: req.user.name
        
    })
}