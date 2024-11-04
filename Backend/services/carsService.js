const connectDB = require('../connectDB/connectDB');

const generateCarsId = async () => {
    const connection = await connectDB();
    try {
        const [rows] = await connection.execute('SELECT COUNT(*) as count FROM CARS');
        const count = rows[0].count;
        return `C${count + 1}`;
    } catch (error) {
        console.error('Error generating car ID:', error.message);
        throw error;
    } finally {
        await connection.end();
    }
};

const insertCars = async (car) => {
    const connection = await connectDB();

    try {
        const { name, model, year, rn, price, p_id } = car;
        const c_id = await generateCarsId();
        const carsQuery = 'INSERT INTO CARS (CAR_ID, CAR_NAME, CAR_MODEL, MODEL_YEAR, CAR_RN, PRICE, P_OWNER, CAR_STATUS) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const carsValues = [c_id, name, model, year, rn, price, p_id, 'available'];
        await connection.execute(carsQuery, carsValues);

        return { c_id, p_id };
    } catch (error) {
        console.error("Error in inserting car:", error.message);
        throw error;
    } finally {
        await connection.end();
    }
};

const getCarsDetails = async () => {
    const connection = await connectDB();
    const getQuery = 'SELECT CAR_ID, CAR_NAME, CAR_MODEL, MODEL_YEAR, PRICE, CAR_RN FROM CARS WHERE CAR_STATUS = "available"';
    try {
        const [rows] = await connection.execute(getQuery);
        return rows;
    } catch (error) {
        console.error("Error fetching car details:", error.message);
        throw new Error('Error fetching car details');
    } finally {
        await connection.end();
    }
};

module.exports = { generateCarsId, insertCars, getCarsDetails };
