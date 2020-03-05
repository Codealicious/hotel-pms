const express = require('express');
const Hotel = require('../models/hotel');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.user) return res.redirect('/landing');
  res.render('index', {
    title: 'Login Page',
    links: [
      'siteWide.css',
      'login.css'
    ],
    scripts: null
  });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/landing',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/landing', function(req, res) {
  Hotel.find({}, (err, hotels) => { 
    res.render('landing', {
      title: "Hotels | Home",
      links: [
          'siteWide.css',
          'landing.css'
      ],
      scripts: [
          'hotels.js'
      ],
      hotels,
      name: req.user.name
      
    }); //render
  }); //find
}); //GET

module.exports = router;
