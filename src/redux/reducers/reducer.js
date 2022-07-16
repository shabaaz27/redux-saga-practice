import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants";

export const cartData = (state = [], action) => {
  // if(action.type === ADD_TO_CART){
  //     console.log(action)
  //     return action.data
  // }else{
  //     return 'No Aaction'
  // }

  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...state];
    case REMOVE_FROM_CART:
      const cartItems = state;
      return cartItems.filter((item) => item.id != action.id);
    case EMPTY_CART:
       state = [];
      return [...state]
    default:
      return state;
  }
};
