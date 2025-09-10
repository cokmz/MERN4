const mongoose = require('mongoose');

const SailorSchema = new mongoose.Schema({
  name: { type: String },
  rank: { type: String },
  division: { type: mongoose.Schema.Types.ObjectId, ref: 'Division' },
  branch: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Sailor', SailorSchema);
