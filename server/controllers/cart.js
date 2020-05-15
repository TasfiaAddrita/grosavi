const express = require("express");

const router = express.Router();

// CartItem Model
const CartItem = require("../models/Cart");

// @route   GET /userID/cart
// @desc    Get all items in user's cart
// @access  Public
router.get("/", (req, res) => {
  CartItem.find()
    // .sort({ date: -1 }) // most recent
    .then(cartItems => res.json(cartItems));
});

// @route   POST /userID/cart
// @desc    Add an item to user's cart
// @access  Public
router.post("/", (req, res) => {
  const newCartItem = new CartItem({
    pass
  });

  newCartItem.save().then(cartItem => res.json(cartItem));
});

// update and delete

module.exports = router;
