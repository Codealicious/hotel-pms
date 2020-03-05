var express = require('express');
var hotelsCtrl = require('../controllers/hotels.js');
var router = express.Router();

router.get('/:id', hotelsCtrl.show);

module.exports = router;