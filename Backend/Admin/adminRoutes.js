const express = require("express");
const router = express.Router();
const { salesHistory, totalSales } = require("./adminController");

router.get('/sales', salesHistory);
router.get('/total-sales', totalSales); 

module.exports = router;
