const express = require("express")
const router = express.Router({ mergeParams: true });

// Market Product model
const MarketProduct = require("../models").market.MarketItem

// @route   GET api/markets/:marketID/products
// @desc    Get all products in market
// @access  Public
router.get("/", (req, res) => {
  pass
})

// @route   POST api/markets/:marketID/products
// @desc    Add a new product to market
// @access  Public
router.post("/", (req, res) => {
  pass
})

// @route   GET api/markets/:marketID/products/:id
// @desc    Get a specific product by id from market
// @access  Public
router.get("/id", (req, res) => {
  pass
})

// @route   UPDATE api/markets/:marketID/products/:id
// @desc    Update a specific product by id from market
// @access  Public
router.put("/id", (req, res) => {
  pass
})

// @route   DELETE api/markets/:marketID/products/:id
// @desc    Delete a specific product by id from market
// @access  Public
router.delete("/id", (req, res) => {
  pass
})

module.exports = router;