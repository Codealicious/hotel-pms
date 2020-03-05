const reservationsCtrl = require('../controllers/reservations');
const express = require('express');
const router = express.Router();

router.get('/hotels/:id/reservations/new', reservationsCtrl.new );
router.get('/reservations/:id', reservationsCtrl.show);

router.post('/reservations', reservationsCtrl.create);

module.exports = router;