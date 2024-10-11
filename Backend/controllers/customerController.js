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
        const isPasswordValid = await bcrypt.compare(password, customer.PASSWORD);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invali password or email' })
        }

        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

module.exports = { customerReg, customerLogin }