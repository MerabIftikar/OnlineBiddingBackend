const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');  // روٹس کو امپورٹ کریں

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);  // '/api/auth' روٹ پر درخواستیں auth.js کے ذریعے ہینڈل ہوں گی

module.exports = app;
