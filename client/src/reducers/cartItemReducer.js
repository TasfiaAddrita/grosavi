import { ADD_GROCERY_ITEM_TO_CART } from "../actions/types";

const initialState = {
  cartItem: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM_TO_CART:
      return null;
    default:
      return state;
  }
}
