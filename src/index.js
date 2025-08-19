// src/index.js
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const createServer = require('./config/server');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create server
const app = createServer();

// Use user routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
