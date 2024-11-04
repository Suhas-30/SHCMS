const connectDB = require ('../connectDB/connectDB')

const generatePaymentID = async()=>{
    const connection = await connectDB();
    try{
        const [rows] = await connection.execute('SELECT COUNT(*) AS count FROM PAYMENT_DETAILS');
        const count = rows[0].count;
        return `PY${count+1}`;
    }catch(error)
    {
        console.log("Error in counting the payment details", error);
    }finally{
        await connection.end();
    }
    
}

const insertPaymentDetails = async(pDetails)=>{
    const connection = await connectDB()
    try{
        const {carId, customerID, payDate, price} = pDetails;
        const pID = await generatePaymentID();
        const payQuery = 'INSERT INTO PAYMENT_DETAILS(PAY_ID, PAY_DATE, AMOUNT, C_ID, CAR_ID) VALUES(?, ?, ?, ?, ?)'
        const payValues = [pID, payDate, price, customerID, carId];
        await connection.execute(payQuery, payValues);
        const soldQuery = 'UPDATE CARS SET CAR_STATUS = "sold" WHERE CAR_ID = ?';
        await connection.execute(soldQuery, [carId]);
        
        return {pID,carId, customerID};
    }catch(error){
        console.error("Error in inserting the details", error);
    }finally{
        await connection.end()
    }
}

module.exports = {insertPaymentDetails}