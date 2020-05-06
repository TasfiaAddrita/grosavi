const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, select: false },
  cart: { type: Schema.Types.ObjectId, ref: "Cart" }
})

module.exports = User = mongoose.model("User", UserSchema);