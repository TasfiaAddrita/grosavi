const express = require("express");

const router = express.Router();

// CartItem Model
const CartItem = require("../../models/Cart");

router.get("/", (req, res) => {
  CartItem.find()
    // .sort({ date: -1 }) // most recent
    .then(cartItems => res.json(cartItems));
});

router.post("/", (req, res) => {
  const newCartItem = new CartItem({
    name: req.body.name,
    weight: req.body.weight,
    image: req.body.image
  });

  newCartItem.save().then(cartItem => res.json(cartItem));
});

module.exports = router;
