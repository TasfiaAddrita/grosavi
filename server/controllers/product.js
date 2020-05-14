const express = require("express");

/* mongodb driver for nodejs
const MongoClient = require("mongodb").MongoClient; 
// Connection URL
const url = "mongodb://localhost:5000";
// Database Name
const dbName = "groceryItems";
// Create a new MongoClient
const client = new MongoClient(url);
// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  client.close();
});
*/

const router = express.Router();

// Product Model
const Product = require("../models/Product");

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get("/", (req, res) => {
  Product.find()
    // .sort({ date: -1 }) // most recent
    .then(products => res.json(products));
});

// @route   POST api/products
// @desc    Create a grocery item
// @access  Public --> Change to Admin
router.post("/", (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    weight: req.body.weight,
    image: req.body.image
  });

  newProduct.save().then(product => res.json(product));
});

// @route   GET api/products/:id
// @desc    Get a product by id
// @access  Public
router.get("/:id", (req, res) => {
  Product.findById(req.params.id).then(product =>
    res.json(product)
  );
});

// @route   UPDATE api/products/:id
// @desc    UPDATE a product by id
// @access  Public --> Change to Admin
router.put("/:id", (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(updatedProduct => {
    res.json(updatedProduct);
  });
});

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Public --> Change to Admin
router.delete("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove())
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
