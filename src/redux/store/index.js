// import { createStore } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import productSaga from '../productSaga'
import rootReducer from '../reducers'

// const reduxStore = createStore(rootReducer)
const sagaMiddleWare = createSagaMiddleWare()
const reduxStore = configureStore(
    {
        reducer:rootReducer,
        middleware:()=>[sagaMiddleWare]
    })

sagaMiddleWare.run(productSaga)
export default reduxStore