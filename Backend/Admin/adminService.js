const connectDB = require('../connectDB/connectDB');

const getSales = async () => {
    const connection = await connectDB();
    const query = 'SELECT DATE_OF_SALE, CAR_ID, PAY_ID, C_ID FROM SALES_HISTORY';

    try {
        const [rows] = await connection.execute(query);
        return rows;
    } catch (error) {
        console.error("Error in getSales", error);
        throw error;
    } finally {
        await connection.end();
    }
};

const getTotalSales = async () => {
    const connection = await connectDB();
    const query = 'SELECT count_total_sales() AS total_sales'; 

    try {
        const [rows] = await connection.execute(query);
        return rows[0].total_sales; 
    } catch (error) {
        console.error("Error in getTotalSales", error);
        throw error;
    } finally {
        await connection.end();
    }
};

module.exports = { getSales, getTotalSales };
