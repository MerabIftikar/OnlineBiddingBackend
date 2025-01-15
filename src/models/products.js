const mongoose = require('mongoose');

// Products Schema
const productSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Product Title
    description: { type: String, required: true }, // Product Description
    category: { type: String, required: true }, // Product Category (e.g., Electronics, Fashion, etc.)
    images: [{ type: String }], // Images URL Array (Array of strings)
    starting_price: { type: Number, required: true }, // Starting Price of the Product
    current_bid: { type: Number, default: 0 }, // Current Highest Bid
    end_date: { type: Date, required: true }, // Bid End Date
    seller_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Seller's ID (Referencing User Model)
});

// Create and export model
module.exports = mongoose.model('Product', productSchema);
