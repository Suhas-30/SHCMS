const express = require("express");
const router = express.Router();
const {salesHistory} = require("./adminController")

router.get('/sales', salesHistory)

module.exports = router;