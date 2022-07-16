import { combineReducers } from "redux";
import { productListReducer } from "./productReducers";
import { cartData } from "./reducer";



export default combineReducers({cartData,productListReducer})