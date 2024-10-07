const {insertCars} = require('../services/carsService');

const addCars = async(req, res) =>{
    try{
        const {name, model, year, rn, price, p_id} = req.body;

        const newCar = await insertCars({name, model, year, rn, price, p_id});

        return res.status(201).json({
            message:'Car added to database successfully',
            data : newCar
        })
    }catch(error){
        console.log('Error while adding car:', error);
        return res.status(500).json({error:'Failed to add car'})
    }
};

module.exports = {
    addCars
}