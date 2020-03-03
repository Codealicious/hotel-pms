// var Hotel = require('../models/hotel');

module.exports = {
    index
}

function index(req, res) {
    console.log(req.params , "We made it here" )
    res.render('hotels/index', {
        title: "Hotels | Home",
        links: [
            'siteWide',
            'homePage'
        ],
        name: req.user.name
        
    })
}