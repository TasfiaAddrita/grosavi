const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");

router.get("/", (req, res) => {
  // console.log("hello world");
  res.redirect("/api/login");
})

// @route   GET /api/signup
// @desc    Get sign up page
// @access  Public
router.get("/signup", (req, res) => {
  res.sendFile("signup.html", { root: "./public/html" });
})

// @route   POST /api/signup
// @desc    Create a new user
// @access  Public
router.post("/signup", (req, res, next) => {
  newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
  User.register(newUser, req.body.password, function(err) {
    if (err) {
      console.log("Error occured while registering new user.", err);
      return next(err);
    }
    console.log("User registered!")
    res.redirect("/api/home");
  })
})

// @route   GET /api/login
// @desc    Get login page
// @access  Public
router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public/html" });
})

// @route   POST /api/login
// @desc    Authenticate user
// @access  Public
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/api/fail', 
    failureFlash: true 
  }), (req, res) => {
    console.log("User successfully logged in.")
    res.redirect('/api/home');
});

// @route   GET /api/logout
// @desc    Log user out
// @access  Public
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/api/login");
})

router.get("/home", (req, res) => {
  res.sendFile("home.html", { root: "./public/html" });
})

module.exports = router;