const {insertPreviousOwner} = require('../services/previousOwnerService');

const addPreviousOwner = async (req, res) =>{
    try{
        const {name, phone, email, address} = req.body;

        if (!name || !phone || !email || !address) {
            return res.status(400).json({ error: "Name, phone, email, and address are required." });
        }

        const newOwner = await insertPreviousOwner({name, phone, email, address});

        return res.status(201).json({
            message: 'Previous owner added successfully',
            data:newOwner
        });
    }catch(error){
        console.log('Error while adding previous owner:', error);
        return res.status(500).json({error:'Failed to add previous owner'});

    }
};

module.exports = {
    addPreviousOwner
}