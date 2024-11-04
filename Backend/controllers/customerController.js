const bcrypt = require('bcryptjs/dist/bcrypt');
const { insertCustomer, getCustomerByEmail } = require('../services/customerService');



const customerReg = async (req, res) => {
    try {
        const { name, phone, email, password, address } = req.body;
        if (!name || !phone || !email || !password || !address) {
            return res.status(400).json({ error: "All fields are required" });

        }

        const newCusto = await insertCustomer({ name, phone, email, password, address });

        return res.status(201).json({
            message: 'Registration Successful',
            data: newCusto
        })
    } catch (error) {
        console.log('Error while registring:', error);
        return res.status(500).json({ error: 'Failed while Registring' });
    }

}

const customerLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const customer = await getCustomerByEmail(email);
        if (!customer) {
            return res.status(400).json({ error: 'Customer not found' });
        }
<<<<<<< HEAD
        console.log('Entered password:', password);
        console.log('Stored hashed password:', customer.PASSWORD);
=======
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
        const isPasswordValid = await bcrypt.compare(password, customer.PASSWORD);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invali password or email' })
        }

<<<<<<< HEAD
        return res.status(200).json({ 
            message: "Login successful",
            customerId: customer.C_ID   

         });
=======
        return res.status(200).json({ message: "Login successful" });
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

<<<<<<< HEAD
module.exports = { customerReg, customerLogin }

=======
module.exports = { customerReg, customerLogin }
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
