const connectDB = require('../connectDB/connectDB');

const getSales = async () => {
    const connection = await connectDB();
    const query = 'SELECT DATE_OF_SALE, CAR_ID, PAY_ID, C_ID FROM SALES_HISTORY';

    try {
        const [rows] = await connection.execute(query);
        console.log("Sales rows:", rows);  // Check if rows contain expected data
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
    const query = 'SELECT count_total_sales() AS total_sales;'; 

    try {
        const [rows] = await connection.execute(query);
        console.log("Total sales row:", rows);  // Log to inspect the returned data structure
        return rows[0]?.total_sales; // Handle potential undefined in rows[0]
    } catch (error) {
        console.error("Error in getTotalSales", error);
        throw error;
    } finally {
        await connection.end();
    }
};

module.exports = { getSales, getTotalSales };
