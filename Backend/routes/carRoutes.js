const express = require('express');
const router = express.Router();
const { addCars, carDetails } = require('../controllers/carsController');

// Define the routes without multer
router.post('/add-car-form', addCars);
router.get('/cars', carDetails);

module.exports = router;
