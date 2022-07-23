import {takeEvery,put} from 'redux-saga/effects'
import { ADD_TO_CART, PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from '../constants'

function* getProducts(){
    let data = yield fetch(`http://localhost:4000/product`)
    data = yield data.json()
    yield put({type:SET_PRODUCT_LIST,data})
    console.warn("action called","JJJEJNKJNJK",data)
}
function* searchProducts(data){
    let result = yield fetch(`http://localhost:4000/product?q=${data.query}`)
    result = yield result.json()
    yield put({type:SET_PRODUCT_LIST,data:result})
    console.warn("search action called","JJJEJNKJNJK",result)
}
export default function* productSaga()
{
        yield takeEvery(PRODUCT_LIST,getProducts)
        yield takeEvery(SEARCH_PRODUCT,searchProducts)
}
