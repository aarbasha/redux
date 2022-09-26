//setup 1  create store
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
//setup 2 create folder Reducers and Create one Reducer Less
import CounterReducer from "./Reducer/CounterReducer";
import UserReducer from './Reducer/UserReducer';
//setup 3 insert counterReducer in store 

import reduxThunk from "redux-thunk"

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const Store = configureStore({ reducer: CounterReducer }, enhancer(applyMiddleware(reduxThunk)))

const Store = configureStore({
    reducer: {
        counter: CounterReducer,
        // users: UserReducer,
    }
})
// setup 4 => export in applcation
export default Store