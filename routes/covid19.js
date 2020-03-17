const express = require('express');
const covid19Controller = require('../controllers/covid19');
const router = express.Router();

router.get('/', covid19Controller.getStartPage);
router.get('/cases', covid19Controller.getConfirmedCases);
router.get('/deaths', covid19Controller.getConfirmedDeaths);
router.get('/recoveries', covid19Controller.getConfirmedRecoveries);

module.exports = router;
