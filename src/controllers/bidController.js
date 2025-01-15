const Bid = require('../models/bid'); // Bid schema import
const Product = require('../models/product'); // Product schema import

// Place a bid
exports.placeBid = async (req, res) => {
    try {
        const { product_id, bidder_id, bid_amount } = req.body;

        // Validate input
        if (!product_id || !bidder_id || !bid_amount) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Find the product
        const product = await Product.findById(product_id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        // Check if bid amount is greater than current bid
        if (bid_amount <= product.current_bid) {
            return res.status(400).json({ message: 'Bid amount must be higher than the current bid.' });
        }

        // Create a new bid
        const newBid = new Bid({ product_id, bidder_id, bid_amount });
        await newBid.save();

        // Update the product's current bid
        product.current_bid = bid_amount;
        await product.save();

        res.status(201).json({ message: 'Bid placed successfully!', bid: newBid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

// Get all bids for a product
exports.getBidsByProduct = async (req, res) => {
    try {
        const bids = await Bid.find({ product_id: req.params.product_id });
        res.status(200).json(bids);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

// Get all bids by a bidder
exports.getBidsByBidder = async (req, res) => {
    try {
        const bids = await Bid.find({ bidder_id: req.params.bidder_id });
        res.status(200).json(bids);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};
