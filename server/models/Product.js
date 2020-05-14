const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  weight: { type: Number, required: true },
  productType: { type: String, required: true },
  image: { type: String, // link to image
    default:
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
  }, 
  // timestamps: {
  //   createdAt: "created_at",
  //   updatedAt: "updated_at"
  // }
});

module.exports = Product = mongoose.model("Product", ProductSchema);
