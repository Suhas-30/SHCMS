const connectDB = require('../connectDB/connectDB')

const generatePreviousOwnerId = async ()=>{
    const connection = await connectDB();
    try{
        const [rows] = await connection.execute('SELECT COUNT(*) as count FROM PREVIOUS_OWNER');
        const count = rows[0].count;
        return `PO${count+1}`;
    }finally{
        await connection.end();
    }
    
};

const insertPreviousOwner = async (owner)=>{
    const connection = await connectDB();
    try{
        const {name, phone, email, address} = owner;

    const id = await generatePreviousOwnerId();

    const ownerQuery = 'INSERT INTO PREVIOUS_OWNER (P_ID, P_NAME, PH, EMAIL) VALUES(?, ?, ?, ?)';
    const ownerValues = [id, name, phone, email];
    await connection.execute(ownerQuery, ownerValues);

    const addresQuery = 'INSERT INTO P_ADDRESS(STREET_NAME, CITY, STATE, COUNTRY, P_ID) VALUES (?, ?, ?, ?, ?)';
    const addressvalues = [address.street, address.city, address.state, address.country, id];
    await connection.execute(addresQuery, addressvalues)

    return {id,name}

    }finally{
        await connection.end();
    }
    
}

const fetchPreviousOwners = async () => {
    const connection = await connectDB(); 
    try {
      const query = 'SELECT P_ID, P_NAME, EMAIL FROM PREVIOUS_OWNER';
      const [rows] = await connection.query(query);
      console.log('Fetched owners from database:', rows); 
      return rows;
    } finally {
      await connection.end();
    }
  };

module.exports = {generatePreviousOwnerId, insertPreviousOwner, fetchPreviousOwners}
