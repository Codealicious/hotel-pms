const express = require('express');
const guestsCtrl = require('../controllers/guests');
const router = express.Router();

/* GET users listing. */
router.get('/show', guestsCtrl.show);

module.exports = router;
