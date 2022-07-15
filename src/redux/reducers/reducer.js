import { ADD_TO_CART } from "../constants"


export const cartData = (state=[],action) =>{
    // if(action.type === ADD_TO_CART){
    //     console.log(action)
    //     return action.data
    // }else{
    //     return 'No Aaction'
    // }

    switch(action.type){
        case ADD_TO_CART:
            console.log(action)
            return action.data;
        default:
            return 'No Aaction'    
    }
    
}