import { ADD_TO_CART } from "../constants"

export const addToCart = (data)=>{
    console.warn("action called",data,ADD_TO_CART)
    return {
        type:ADD_TO_CART,
        data
    }
}