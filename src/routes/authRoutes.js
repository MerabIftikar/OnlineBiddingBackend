const express = require('express');
const router = express.Router();
const User = require('../models/user');  // User Model

// POST /register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone_no } = req.body;

        // Validate input
        if (!name || !email || !password || !phone_no) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create new user
        const newUser = new User({ name, email, password, phone_no });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error:', error);  // Log the error
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

// GET /users - Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();  // Fetch all users from the database

        // Check if no users are found
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found.' });
        }

        res.status(200).json(users);  // Return the list of users
    } catch (error) {
        console.error('Error:', error);  // Log the error
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
