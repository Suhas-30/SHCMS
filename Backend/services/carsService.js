const connectDB = require('../connectDB/connectDB');

// Function to generate a new car ID
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

// Function to insert a new car into the database
const insertCars = async (car) => {
    const connection = await connectDB();
    try {
        const { name, model, year, rn, price, p_id, imageUrl } = car;

        // Process the image URL (split out the filename)
        const imageFileName = imageUrl.split('/uploads/')[1]; // Extract filename from the URL

        // Generate the car ID
        const c_id = await generateCarsId();

        // SQL query to insert the car data
        const carsQuery = `
            INSERT INTO CARS 
            (CAR_ID, CAR_NAME, CAR_MODEL, MODEL_YEAR, CAR_RN, PRICE, P_OWNER, CAR_STATUS, IMAGE_URL)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        // Values for the query
        const carsValues = [c_id, name, model, year, rn, price, p_id, 'available', imageFileName];
        
        // Execute the query with the values
        await connection.execute(carsQuery, carsValues);

        return { c_id, p_id };
    } catch (error) {
        console.error("Error in inserting car:", error.message);
        throw error;
    } finally {
        await connection.end();
    }
};

// Function to fetch available cars from the database
const getCarsDetails = async () => {
    const connection = await connectDB();
    const getQuery = 'SELECT CAR_ID, CAR_NAME, CAR_MODEL, MODEL_YEAR, PRICE, CAR_RN, IMAGE_URL FROM CARS WHERE CAR_STATUS = "available"';
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
