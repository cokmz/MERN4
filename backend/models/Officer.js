const mongoose = require('mongoose');

const OfficerSchema = new mongoose.Schema({
  name: { type: String },
  rank: { type: String},
  department: { type: String },
  branch: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Officer', OfficerSchema);
