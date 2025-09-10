const Sailor = require('../models/Sailor');

exports.assignDivision = async (req, res) => {
  try {
    const { sailorId, divisionId } = req.body;
    const sailor = await Sailor.findById(sailorId);
    if (!sailor) return res.status(404).json({ error: 'Sailor not found' });
    sailor.division = divisionId;
    await sailor.save();
    res.json({ message: 'Division assigned successfully', sailor });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
