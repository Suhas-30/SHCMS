const express = require('express');
const router = express.Router();
const { addPreviousOwner, getPreviousOwnerDetails } = require('../controllers/previousOwnerController');

router.post('/previous-owner-form', addPreviousOwner);
router.get('/previous-owner-details', getPreviousOwnerDetails);

module.exports = router;
