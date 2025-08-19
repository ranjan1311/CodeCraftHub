// src/services/userService.js
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User-related services (e.g., registration, login)
const createUser = async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    return newUser.save();
};

const findUserByEmail = async (email) => {
    return User.findOne({ email });
};

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { createUser, findUserByEmail, generateToken };
