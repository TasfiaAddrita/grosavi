const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CartItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 1
    },
    image: {
      type: String, // link to image
      default:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = CartItem = mongoose.model("cartItem", CartItemSchema);
