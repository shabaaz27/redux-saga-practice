// import { createStore } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from '../reducers'

// const reduxStore = createStore(rootReducer)
const reduxStore = configureStore({reducer:rootReducer})

export default reduxStore