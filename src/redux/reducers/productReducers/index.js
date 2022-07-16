import { PRODUCT_LIST } from "../../constants";


export const productListReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return [action.data, ...state];
    default:
      return state;
  }
};
