const { insertCars, getCarsDetails } = require('../services/carsService');

const addCars = async (req, res) => {
    try {
        const { name, model, year, rn, price, p_id } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

        // Check for required fields
        if (!name || !model || !year || !rn || !p_id) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Insert new car data into the database using the service layer
        const newCar = await insertCars({ name, model, year, rn, price, p_id, imageUrl });

        return res.status(201).json({
            message: 'Car added to database successfully',
            data: newCar
        });
    } catch (error) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ message: 'File exceeds the limit of 10MB' });
        }
        console.error('Error while adding car:', error.message);
        return res.status(500).json({ error: 'Failed to add car' });
    }
};

const carDetails = async (req, res) => {
    try {
        const cars = await getCarsDetails();
        res.json(cars);
    } catch (error) {
        console.error("Error while fetching the car details:", error.message);
        return res.status(500).json({ error: 'Failed to fetch the car details' });
    }
};

module.exports = {
    addCars,
    carDetails
};
