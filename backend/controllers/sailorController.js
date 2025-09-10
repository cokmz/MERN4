const Sailor = require('../models/Sailor');

exports.createSailor = async (req, res) => {
  try {
    const { name, rank, division, branch, user } = req.body;
    const sailor = new Sailor({ name, rank, division, branch, user });
    await sailor.save();
    res.status(201).json(sailor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSailors = async (req, res) => {
  try {
    const sailors = await Sailor.find().populate('user');
    res.json(sailors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
