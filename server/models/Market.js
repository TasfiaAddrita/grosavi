const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarketSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  logo: { type: String, // link to image
    default:
      "https://img.favpng.com/17/0/21/computer-icons-retail-online-shopping-png-favpng-p8VKagPJEXbBQzJjzbTheQCGx.jpg"
  }
});

const MarketItemSchema = new Schema({
  market: { type: Schema.Types.ObjectId, ref: "Market" },
  item: { type: Schema.Types.ObjectId, ref: "GroceryItem" },
  stock: { type: Number, default: 1 },
  price: { type: Number, required: true }
});

module.exports = {
  Market: mongoose.model("Market", MarketSchema),
  MarketItem: mongoose.model("MarketItem", MarketItemSchema)
};

// supermarket model
// name
// address
// logo

// supermarket <--> grocery item
// supermarket id
// groceryItem id
// price
