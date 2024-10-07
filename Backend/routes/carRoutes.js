const express = require('express');
const router = express.Router();
const {addCars} = require('../controllers/carsController')

router.post('/add-car-form', addCars);

module.exports = router;