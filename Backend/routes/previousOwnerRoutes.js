const express = require('express');
const router = express.Router();
const {addPreviousOwner} = require('../controllers/previousOwnerController')


router.post('/previous-owner-form', addPreviousOwner);

module.exports = router