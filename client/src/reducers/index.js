import { combineReducers } from "redux";
import groceryItemReducer from "./groceryItemReducer";
import cartItemReducer from "./cartItemReducer";

export default combineReducers({
  groceryItem: groceryItemReducer,
  cartItem: cartItemReducer
});
