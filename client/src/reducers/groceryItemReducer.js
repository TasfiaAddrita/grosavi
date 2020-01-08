import { GET_GROCERY_ITEMS, ITEMS_LOADING } from "../actions/types";

const initialState = {
  groceryItems: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GROCERY_ITEMS:
      return {
        ...state,
        groceryItems: action.payload,
        loading: false
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
