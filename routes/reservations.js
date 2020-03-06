const reservationsCtrl = require('../controllers/reservations');
const express = require('express');
const router = express.Router();

router.get('/hotels/:id/reservations/new/:error', reservationsCtrl.new );
router.get('/reservations/:id', reservationsCtrl.show);

router.post('/hotels/:id/reservations', reservationsCtrl.create);

router.put('/reservations/:id', reservationsCtrl.update);
router.delete('/reservations/:id', reservationsCtrl.delete);

module.exports = router;