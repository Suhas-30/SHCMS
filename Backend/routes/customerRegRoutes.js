const express = require('express');
const router = express.Router();
const {customerReg} = require('../controllers/customerController')

router.post('/customer-reg', customerReg)

module.exports = router