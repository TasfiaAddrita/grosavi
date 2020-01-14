const express = require("express");

const router = express.Router();

// CartItem Model
const CartItem = require("../../models/Cart");

// @route   GET api/cart-items
// @desc    Get all cart items
// @access  Public
router.get("/", (req, res) => {
  CartItem.find()
    // .sort({ date: -1 }) // most recent
    .then(cartItems => res.json(cartItems));
});

// @route   POST api/cart-items
// @desc    Create a cart item
// @access  Public
router.post("/", (req, res) => {
  const newCartItem = new CartItem({
    name: req.body.name,
    weight: req.body.weight,
    image: req.body.image
  });

  newCartItem.save().then(cartItem => res.json(cartItem));
});

module.exports = router;
