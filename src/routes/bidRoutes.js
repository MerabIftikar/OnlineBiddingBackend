const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');

// Place a bid
router.post('/bids', bidController.placeBid);

// Get all bids for a product
router.get('/bids/product/:product_id', bidController.getBidsByProduct);

// Get all bids by a bidder
router.get('/bids/bidder/:bidder_id', bidController.getBidsByBidder);

module.exports = router;
