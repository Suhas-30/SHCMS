// adminController.js
const { getSales, getTotalSales } = require("./adminService");

const salesHistory = async (req, res) => {
    try {
        const sales = await getSales();
        res.json(sales);
    } catch (error) {
        console.log("Error in salesHistory function", error);
        return res.status(500).json({ error: 'Failed to fetch the sales details' });
    }
};

const totalSales = async (req, res) => {
    try {
        const total = await getTotalSales();
        res.json({ total_sales: total }); // Send the total_sales count as JSON
    } catch (error) {
        console.log("Error in totalSales function", error);
        return res.status(500).json({ error: 'Failed to fetch the total sales count' });
    }
};

module.exports = { salesHistory, totalSales };
