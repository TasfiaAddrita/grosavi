const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const CartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  cart: [{ type: Schema.Types.ObjectId, ref: "CartItem" }]
})

const CartItemSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "GroceryItem" }, // create a foreign key to grocery item
  quantity: { type: Number, default: 1 },
  // timestamps: {
  //   createdAt: "created_at",
  //   updatedAt: "updated_at"
  // }
});

module.exports = {
  Cart: mongoose.model("Cart", CartSchema),
  CartItem: mongoose.model("CartItem", CartItemSchema)
}

  //   {
  //     name: {
  //       type: String,
  //       required: true
  //     },
  //     weight: {
  //       type: Number,
  //       required: true
  //     },
  //     quantity: {
  //       type: Number,
  //       required: true,
  //       default: 1
  //     },
  //     image: {
  //       type: String, // link to image
  //       default:
  //         "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
  //     }
  //   },