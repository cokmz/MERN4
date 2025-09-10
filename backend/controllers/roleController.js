const Officer = require('../models/Officer');

exports.assignRole = async (req, res) => {
  try {
    const { officerId, role } = req.body;
    const officer = await Officer.findById(officerId);
    if (!officer) return res.status(404).json({ error: 'Officer not found' });
    officer.role = role;
    await officer.save();
    res.json({ message: 'Role assigned successfully', officer });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
