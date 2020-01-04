const express = require("express");
const router = express.Router();

// Grocery Item Model
const GroceryItem = require("../../models/GroceryItem");

// @route   GET api/grocery-items
// @desc    Get all grocery items
// @access  Public
router.get("/", (req, res) => {
  GroceryItem.find()
    // .sort({ date: -1 }) // most recent
    .then(groceryItems => res.json(groceryItems));
});

// @route   POST api/grocery-items
// @desc    Create a grocery item
// @access  Public
router.post("/", (req, res) => {
  const newGroceryItem = new GroceryItem({
    name: req.body.name,
    weight: req.body.weight,
    image: req.body.image
  });

  newGroceryItem.save().then(groceryItem => res.json(groceryItem));
});

// @route   GET api/grocery-items/:id
// @desc    Get a grocery item by id
// @access  Public
router.get("/:id", (req, res) => {
  GroceryItem.findById(req.params.id).then(groceryItems =>
    res.json(groceryItems)
  );
});

// @route   DELETE api/grocery-items/:id
// @desc    Delete a grocery item
// @access  Public
router.delete("/:id", (req, res) => {
  GroceryItem.findById(req.params.id)
    .then(groceryItem => groceryItem.remove())
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
