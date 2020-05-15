const express = require("express");
const router = express.Router();

// Market model
const Market = require("../models").market
// console.log(Market)

const marketProduct = require("./marketProduct")
// console.log(marketProduct)

// @route   GET api/markets
// @desc    Get all markets
// @access  Public
router.get("/", (req, res) => {
  pass
})

// @route   POST api/markets
// @desc    Create a new market
// @access  Public
router.post("/", (req, res) => {
  pass
})

// @route   GET api/markets/:id
// @desc    Get a market by id
// @access  Public
router.get("/:id", (req, res) => {
  pass
})

// @route   UPDATE api/markets/:id
// @desc    Update a market's info by id
// @access  Public
router.put("/:id", (req, res) => {
  pass
})

// @route   DELETE api/markets/:id
// @desc    Remove a market from grosavi's db
// @access  Public
router.delete("/:id", (req, res) => {
  pass
})

// route to redirect to market products
// router.use("/:marketID/products", marketProduct.router);

module.exports = router;