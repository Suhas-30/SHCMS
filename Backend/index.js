const express = require('express');
const dotenv = require('dotenv');
const previousOwnerRoutes = require('./routes/previousOwnerRoutes');
const addCarsRoutes = require('./routes/carRoutes')
const connectDB = require('./connectDB/connectDB'); 
const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(express.json());
app.use(previousOwnerRoutes); 
app.use(addCarsRoutes)

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); 
    }
};

startServer(); 
