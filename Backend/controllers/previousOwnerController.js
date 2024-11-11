const { insertPreviousOwner, fetchPreviousOwners } = require('../services/previousOwnerService');

const addPreviousOwner = async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;

    if (!name || !phone || !email || !address) {
      return res.status(400).json({ error: "Name, phone, email, and address are required." });
    }

    const newOwner = await insertPreviousOwner({ name, phone, email, address });

    return res.status(201).json({
      message: 'Previous owner added successfully',
      data: newOwner,
    });
  } catch (error) {
    console.log('Error while adding previous owner:', error);
    return res.status(500).json({ error: 'Failed to add previous owner' });
  }
};

const getPreviousOwnerDetails = async (req, res) => {
  try {
    const owners = await fetchPreviousOwners();
    res.status(200).json(owners);
  } catch (error) {
    console.error('Error fetching previous owner details:', error);
    res.status(500).json({ error: 'Failed to fetch previous owner details' });
  }
};

module.exports = {
  addPreviousOwner,
  getPreviousOwnerDetails,
};
