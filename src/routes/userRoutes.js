// src/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// API routes for user management
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
