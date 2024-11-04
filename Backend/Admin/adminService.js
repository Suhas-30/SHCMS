const connectDB = require('../connectDB/connectDB')


const getSales = async ()=>{
    const connection = await connectDB();
    const getQuery = 'SELECT DATE_OF_SALE, CAR_ID, PAY_ID, C_ID FROM SALES_HISTORY';

    try{
        const [rows] = await connection.execute(getQuery);
        return rows;
    }catch(error){
        console.error("Error in getSales", error);
    }finally{
        await connection.end();
    }

}

module.exports = {getSales}