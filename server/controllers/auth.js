const express = require("express");
const router = express.Router();
const User = require("../models").user
const jwt = require("jsonwebtoken");

// @route   GET /sign-up
// @desc    Get sign up page
// @access  Public

// @route   POST /sign-up
// @desc    Create a new user
// @access  Public

// @route   GET /login
// @desc    Get login page
// @access  Public

// @route   POST /login
// @desc    Authenticate user
// @access  Public

// @route   GET /logout
// @desc    Log user out
// @access  Public

module.exports = router;