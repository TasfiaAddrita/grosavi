import { GET_GROCERY_ITEMS } from "../actions/types";

const initialState = {
  groceryItems: [
    { id: 1, name: "Eggs" },
    { id: 2, name: "Milk" },
    { id: 3, name: "Water" },
    { id: 4, name: "Cheese" },
    { id: 4, name: "Apples" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GROCERY_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
