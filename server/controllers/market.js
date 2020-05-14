const express = require("express");

const router = express.Router();

// Market model
const Market = require("../models").market

// @route   GET api/markets
// @desc    Get all markets
// @access  Public

// @route   POST api/markets
// @desc    Create a new market
// @access  Public

// @route   GET api/markets/:id
// @desc    Get a market by id
// @access  Public

// @route   UPDATE api/markets/:id
// @desc    Update a market's info by id
// @access  Public

// @route   DELETE api/markets/:id
// @desc    Remove a market from grosavi's db
// @access  Public

// route to redirect to market products

module.exports = router;