// src/config/server.js
const express = require('express');
const cors = require('cors');

// Server configuration
const createServer = () => {
    const app = express();
    app.use(cors()); // Enable CORS
    app.use(express.json()); // Parse JSON requests
    return app;
};

module.exports = createServer;
