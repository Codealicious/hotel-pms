const reservationsCtrl = require('../controllers/reservations');
const express = require('express');
const router = express.Router();

router.get('/hotels/:id/reservations/new/:error', isLoggedIn, reservationsCtrl.new );
router.get('/reservations/:id', reservationsCtrl.show);

router.post('/hotels/:id/reservations', reservationsCtrl.create);

router.put('/reservations/:id',isLoggedIn, reservationsCtrl.update);
router.delete('/reservations/:id', isLoggedIn, reservationsCtrl.delete);

module.exports = router;


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }