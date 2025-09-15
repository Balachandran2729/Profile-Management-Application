const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const profileRoutes = require('./routes/profiles');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use('/public/images', express.static('public/images'));

// Routes
app.use('/api/profiles', profileRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Profile Management API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});