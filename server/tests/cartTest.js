const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

const Cart = require("../models/Cart");
const GroceryItem = require("../models/GroceryItem");

chai.should();
chai.use(chaiHttp);
