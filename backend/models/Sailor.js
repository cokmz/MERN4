const mongoose = require('mongoose');

const SailorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rank: { type: String },
  department: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Sailor', SailorSchema);
