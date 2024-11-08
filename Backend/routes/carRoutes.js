const express = require('express');
const multer = require('multer');
const router = express.Router();
const { addCars, carDetails } = require('../controllers/carsController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage });

router.post('/add-car-form', upload.single('image'), addCars);
router.get('/cars', carDetails);

module.exports = router;
