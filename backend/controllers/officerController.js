const Officer = require('../models/Officer');

exports.createOfficer = async (req, res) => {
  try {
    const { name, rank, department, branch, user } = req.body;
    const officer = new Officer({ name, rank, department, branch, user });
    await officer.save();
    res.status(201).json(officer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOfficers = async (req, res) => {
  try {
    const officers = await Officer.find().populate('user');
    res.json(officers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
