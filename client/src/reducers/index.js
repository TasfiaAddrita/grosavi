import { combineReducers } from "redux";
import groceryItemReducer from "./groceryItemReducer";

export default combineReducers({
  groceryItem: groceryItemReducer
});
