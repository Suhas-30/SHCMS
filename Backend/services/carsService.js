const connectDB = require('../connectDB/connectDB')

const generateCarsId = async() =>{
    const connection = await connectDB();
    try{
        const [rows] = await connection.execute('SELECT COUNT(*) as count FROM CARS');
        const count = rows[0].count;
        return `C${count+1}`;
    }catch(error){
        console.error('Error generating car ID:', error);
        throw error;
    }finally{
        await connection.end();
    }
}

const insertCars = async(car) =>{
    const connection  = await connectDB();

    try{
        const {name, model, year, rn, price, p_id} = car;
        const c_id = await generateCarsId();
        const carsQuery = 'INSERT INTO CARS (CAR_ID, CAR_NAME, CAR_MODEL, MODEL_YEAR, CAR_RN, PRICE, P_OWNER) VALUES(?, ?, ?, ?, ?, ?, ?)';
        const carsValues = [c_id, name, model, year, rn, price, p_id];
        await connection.execute(carsQuery, carsValues);

        return {c_id, p_id};
    }catch(error){
        console.error("Error in inserting an error ", error);
        throw error;
    }finally{
        await connection.end();
    }
}

module.exports = {generateCarsId, insertCars}