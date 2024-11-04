const express = require('express');
const router = express.Router();
const {paymentProcess} = require('../controllers/paymentController')

router.post('/payment', paymentProcess);

module.exports = router;