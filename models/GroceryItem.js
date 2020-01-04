const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GroceryItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      required: true
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

module.exports = GroceryItem = mongoose.model("groceryItem", GroceryItemSchema);
