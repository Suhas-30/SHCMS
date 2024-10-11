const express = require('express');
const router = express.Router();
const {customerReg, customerLogin} = require('../controllers/customerController')

router.post('/customer-reg', customerReg);
router.post('/customer-login', customerLogin);

module.exports = router