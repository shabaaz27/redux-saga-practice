import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../../constants"


export const productList = ()=>{
    // let data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    // data = await data.json()

    // console.warn("action called","JJJEJNKJNJK",data)
    return {
        type:PRODUCT_LIST,
    }
}

export const productSearch = (query)=>{
    return{
        type: SEARCH_PRODUCT,
        query
    }

}


