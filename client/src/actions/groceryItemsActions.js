import axios from "axios";
import { GET_GROCERY_ITEMS, ITEMS_LOADING } from "./types";

export const getGroceryItems = () => dispatch => {
  dispatch(setGroceryItemsLoading());
  axios.get("api/grocery-items").then(res =>
    dispatch({
      type: GET_GROCERY_ITEMS,
      payload: res.data
    })
  );
};

export const setGroceryItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
