
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
// const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const officerRoutes = require('./routes/officerRoutes');
const sailorRoutes = require('./routes/sailorRoutes');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});


app.use('/api/auth', authRoutes);
app.use('/api/officers', officerRoutes);
app.use('/api/sailors', sailorRoutes);
// app.use('/api/users', userRoutes);

// Centralized error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
