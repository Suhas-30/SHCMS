const connectDB = require('../connectDB/connectDB');
const bcrypt = require("bcryptjs");

const generateCustomerId = async()=>{
    const connection = await connectDB();
    try{
        const [rows] = await connection.execute('SELECT COUNT(*) as count FROM CUSTOMER');
        const count = rows[0].count;
        return `CU${count+1}`;
    }finally{
        await connection.end();
    }
};

const insertCustomer = async (customer) =>{
    const connection = await connectDB();
    try{
        const {name, phone, email, password, address} = customer;
        const id = await generateCustomerId();

        const hashedPassword = await bcrypt.hash(password, 10);

        const custoQuery =  'INSERT INTO CUSTOMER(C_ID, C_NAME, PH, EMAIL, PASSWORD, CAR_ID) VALUES(?, ?, ?, ?, ?, ?)';
        const custoValues = [id, name, phone, email, hashedPassword, null];
        await connection.execute(custoQuery, custoValues)

        const cuAddressQuery = 'INSERT INTO C_ADDRESS(STREET_NAME, CITY, STATE, COUNTRY, C_ID) VALUES (?, ?, ?, ?, ?)';
        const cuAddressValues = [address.street, address.city, address.state, address.country, id];
        await connection.execute(cuAddressQuery, cuAddressValues);

        return {id, name};
    }finally{
        await connection.end();
    }
}

const getCustomerByEmail = async (email) =>{
    const connection = await connectDB();
    try{
        const [rows] = await connection.execute('SELECT * FROM CUSTOMER WHERE EMAIL = ?', [email]);
        return rows[0];
    }finally{
        await connection.end();
    }
}

module.exports = {generateCustomerId, insertCustomer, getCustomerByEmail}

//a@email.com 123