const express = require("express");
const router = express.Router();
const passport = require("passport");
// const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

// @route   GET /api/signup
// @desc    Get sign up page
// @access  Public
router.get("/signup", (req, res) => {
  pass

})

// @route   POST /api/signup
// @desc    Create a new user
// @access  Public
router.post("/signup", passport.authenticate("local-signup", {
  successRedirect: "/",
  failureRedirect: "/",
  failureFlash: true
}));

// @route   GET /api/login
// @desc    Get login page
// @access  Public
router.get("/login", (req, res) => {
  pass
})

// @route   POST /api/login
// @desc    Authenticate user
// @access  Public
router.post("/login", (req, res) => {
  pass
})

// @route   GET /api/logout
// @desc    Log user out
// @access  Public
router.get("/logout", (req, res) => {
  pass
})

module.exports = router;