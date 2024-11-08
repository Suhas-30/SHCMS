const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const previousOwnerRoutes = require('./routes/previousOwnerRoutes');
const addCarsRoutes = require('./routes/carRoutes');
const custoReg = require('./routes/customerRegRoutes');
const carPayment = require('./routes/carPaymentRoutes');
const adminRoutes = require('./Admin/adminRoutes');
const connectDB = require('./connectDB/connectDB');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));


app.use(previousOwnerRoutes); 
app.use(addCarsRoutes);
app.use(custoReg);
app.use(carPayment);
app.use(adminRoutes);


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
