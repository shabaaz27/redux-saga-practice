import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants"

export const addToCart = (data)=>{
    console.warn("action called",data,ADD_TO_CART)
    return {
        type:ADD_TO_CART,
        data
    }
}

export const removeFromCart = (id)=>{
    console.warn("action called",id,REMOVE_FROM_CART)
    return {
        type:REMOVE_FROM_CART,
        id
    }
}
export const emptyCart = ()=>{
    console.warn("action called",EMPTY_CART)
    return {
        type:EMPTY_CART,
    }
}