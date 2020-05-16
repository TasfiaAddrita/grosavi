// DB Config
require("./data/grosavi-db");
require("./config/passport");

const controller = require("./controllers");
const User = require("./models/User");

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("connect-flash");
const expressSession = require("express-session")({
  secret: "secret", // sign session ID
  resave: false, // resave -- forces session to be saved back to the session store
  saveUninitialized: false, // saveUninitialized -- forces session that is "uninitialized" to be saved to store
});

const app = express();

// bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use(flash());

// auth middleware
app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());

// passport.use(User.createStrategy()); // set up strategy via passport-local-mongoose
// passport.serializeUser(User.serializeUser()); // invoke authentication, serialize user instance, and store it in session via cookie
// passport.deserializeUser(User.deserializeUser()); // invoke subsequent request to deserialize instance and provide unique cookie identifier as "credential"

// DB Config
// const db = require("./config/keys").mongoURI;

// Connect to Mongo
// mongoose
//   .connect(db)
//   .then(() => console.log("Mongoose Connected"))
//   .catch(err => console.log(err));

// Use Routes
app.use("/api", controller.auth);
app.use("/api/products", controller.products);
app.use("/api/markets", controller.markets);

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
