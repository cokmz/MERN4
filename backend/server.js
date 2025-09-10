
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const officerRoutes = require('./routes/officerRoutes');
const sailorRoutes = require('./routes/sailorRoutes');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const roleRoutes = require('./routes/roleRoutes');
const divisionRoutes = require('./routes/divisionRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});


app.use('/api/auth', authRoutes);
app.use('/api/officers', officerRoutes);
app.use('/api/sailors', sailorRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/divisions', divisionRoutes);
// app.use('/api/users', userRoutes);

// Centralized error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
