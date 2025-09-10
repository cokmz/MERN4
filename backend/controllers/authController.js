const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Sailor = require('../models/Sailor');
const Officer = require('../models/Officer');

exports.register = async (req, res) => {
  const session = await User.startSession();
  session.startTransaction();
  try {
    const { serviceNo, password, role } = req.body;
    const existingUser = await User.findOne({ serviceNo });
    if (existingUser) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ error: 'Service number already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create([{ serviceNo, password: hashedPassword, role }], { session });
    if (role === 'sailor') {
      await Sailor.create([{ name: '', rank: '', division: '', user: user[0]._id }], { session });
    } else {
      await Officer.create([{ name: '', rank: '', department: '', user: user[0]._id }], { session });
    }
    await session.commitTransaction();
    session.endSession();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { serviceNo, password } = req.body;
    const user = await User.findOne({ serviceNo });
    if (!user) {
      return res.status(400).json({ error: 'Invalid service number or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid service number or password' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { serviceNo: user.serviceNo, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
