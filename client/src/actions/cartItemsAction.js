import axios from "axios";
import { ADD_GROCERY_ITEM_TO_CART } from "./types";

export const addGroceryItemToCart = groceryItem => dispatch => {
  axios.post("/api/cart-items", groceryItem).then(res => {
    // dispatch({
    //   type: ADD_GROCERY_ITEM_TO_CART
    // });
    console.log(res.data);
  });
};
