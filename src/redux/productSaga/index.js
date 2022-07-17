import {takeEvery,put} from 'redux-saga/effects'
import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from '../constants'

function* getProducts(){
    let data = yield fetch(`http://localhost:4000/product`)
    data = yield data.json()
    yield put({type:SET_PRODUCT_LIST,data})
    console.warn("action called","JJJEJNKJNJK",data)
}
function* testCart(){
    console.warn("call cart here")
}
export default function* productSaga()
{
        yield takeEvery(PRODUCT_LIST,getProducts)
        yield takeEvery(ADD_TO_CART,testCart)
}
