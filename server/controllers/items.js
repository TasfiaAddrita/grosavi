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

// Grocery Item Model
const GroceryItem = require("../models/GroceryItem");

// @route   GET api/items
// @desc    Get all grocery items
// @access  Public
router.get("/", (req, res) => {
  GroceryItem.find()
    // .sort({ date: -1 }) // most recent
    .then(groceryItems => res.json(groceryItems));
});

// @route   POST api/items
// @desc    Create a grocery item
// @access  Public --> Change to Admin
router.post("/", (req, res) => {
  const newGroceryItem = new GroceryItem({
    name: req.body.name,
    weight: req.body.weight,
    image: req.body.image
  });

  newGroceryItem.save().then(groceryItem => res.json(groceryItem));
});

// @route   GET api/items/:id
// @desc    Get a grocery item by id
// @access  Public
router.get("/:id", (req, res) => {
  GroceryItem.findById(req.params.id).then(groceryItems =>
    res.json(groceryItems)
  );
});

// @route   UPDATE api/items/:id
// @desc    UPDATE a grocery item by id
// @access  Public --> Change to Admin
router.put("/:id", (req, res) => {
  GroceryItem.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(updatedItem => {
    res.json(updatedItem);
  });
});

// @route   DELETE api/items/:id
// @desc    Delete a grocery item
// @access  Public --> Change to Admin
router.delete("/:id", (req, res) => {
  GroceryItem.findById(req.params.id)
    .then(groceryItem => groceryItem.remove())
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
