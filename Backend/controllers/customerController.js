const {insertCustomer} = require('../services/customerService');

const customerReg = async (req, res) =>{
    try{
        const {name, phone, email, password, address} = req.body;
        if(!name || !phone || !email || !password || !address){
            return res.status(400).json({error: "All fields are required"});

        }

        const newCusto = await insertCustomer({name, phone, email, password, address});

        return res.status(201).json({
            message: 'Registration Successful',
            data:newCusto
        })
    }catch(error){
        console.log('Error while registring:', error);
        return res.status(500).json({error: 'Failed while Registring'});
    } 

}

module.exports = {customerReg}