// Import mongoose
const mongoose = require('mongoose');

// Define Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_no: { type: String, required: true },
});

// Export Model
const User = mongoose.model('User', userSchema, 'users');
module.exports = User;
