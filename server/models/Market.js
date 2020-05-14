const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarketSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, require: true },
  zip: { type: String, required: true },
  logo: {
    type: String, // link to image
    default:
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
  }, 
  inventory: [{ type: Schema.Types.ObjectId, ref: "MarketItem" }]
});

const MarketItemSchema = new Schema({ 
  item: { type: Schema.Types.ObjectId, ref: "Product" },
  stock: { type: Number, required: true },
  price: { type: Number, required: true }
});

module.exports = {
  Market: mongoose.model("Market", MarketSchema),
  MarketItem: mongoose.model("MarketItem", MarketItemSchema)
};