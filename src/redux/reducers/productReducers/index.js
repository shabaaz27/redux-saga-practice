import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../../constants";


export const productListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("SETPRO",action.data)
      return [...action.data];
    default:
      return state;
  }
};
