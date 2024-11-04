const {insertPaymentDetails} = require("../services/paymentServices")


const paymentProcess = async(req, res) =>{
    try{
        const {carId, customerID, payDate, price} = req.body;
        if(!carId || !customerID || !payDate  || !price){
            return res.status(400).json({error: "All fields are required"});

        }
        const newPayment = await insertPaymentDetails({carId, customerID, payDate, price})

        return res.status(201).json({
            message: 'Paymnet Successful',
            data: newPayment
        })
    }catch(error){
        console.log('Error while registring:', error);
        return res.status(500).json({error: 'Failed while Registring'});
    }
} 

module.exports = {paymentProcess}