var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.user) return res.redirect('/hotels');
  res.render('index', {
    title: 'Login Page',
    links: [
      'siteWide',
      'loginPage'
    ]
  });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/hotels',
    failureRedirect: '/'
  }
));

router.get('/logut', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
