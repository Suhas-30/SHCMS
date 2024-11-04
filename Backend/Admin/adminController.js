const {getSales} = require("./adminService")

const salesHistory = async(req, res)=>{
    try{
        const sales = await getSales();
        res.json(sales);
    }catch(error){
        console.log("Error in salesHistory func", error)
        return res.status(500).json({ error: 'Failed to fetch the Sales details' });
    }
}

module.exports = {salesHistory};