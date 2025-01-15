const mongoose = require('mongoose');

// Bids Schema
const bidSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Referencing Product
    bidder_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referencing User (Bidder)
    bid_amount: { type: Number, required: true }, // Bid Amount
    bid_time: { type: Date, default: Date.now }, // Time of the bid
});

// Create and export model
module.exports = mongoose.model('Bid', bidSchema);
