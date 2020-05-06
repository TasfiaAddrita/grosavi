const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// const groceryItems = require("./routes/api/grocery-items");
// const cartItems = require("./routes/api/cart-items");
const controller = require("./controllers");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("Mongoose Connected"))
  .catch(err => console.log(err));

// Use Routes
// app.use("/api/grocery-items", groceryItems);
// app.use("/api/cart-items", cartItems);
app.use("/api/items", controller.groceryItems);
app.use("/api/cart", controller.cart);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
