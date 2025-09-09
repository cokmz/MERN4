const mongoose = require('mongoose');

const OfficerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rank: { type: String, required: true },
  department: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Officer', OfficerSchema);
