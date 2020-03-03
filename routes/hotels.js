var express = require('express');
var hotelsCtrl = require('../controllers/hotels.js');
var router = express.Router();

router.get('/', hotelsCtrl.index);

module.exports = router;