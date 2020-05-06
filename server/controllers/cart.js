const express = require("express");

const router = express.Router();

// CartItem Model
const CartItem = require("../models/Cart");

// @route   GET api/cart
// @desc    Get all cart items
// @access  Public
router.get("/", (req, res) => {
  CartItem.find()
    // .sort({ date: -1 }) // most recent
    .then(cartItems => res.json(cartItems));
});

// @route   POST api/cart
// @desc    Create a cart item
// @access  Public
router.post("/", (req, res) => {
  const newCartItem = new CartItem({
    name: req.body.name,
    weight: req.body.weight,
    image: req.body.image,
    quantity: req.body.quantity
  });

  newCartItem.save().then(cartItem => res.json(cartItem));
});

// update and delete

module.exports = router;
