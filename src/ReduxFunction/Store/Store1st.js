//npm i redux react-redux
import { combineReducers, createStore } from 'redux'

//npm install --save redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

import {CounterReducer} from '../Reducer/CounterReducer'





const CombineReducer = combineReducers({
    CounterReducer
})

export const store = createStore(CombineReducer,composeWithDevTools())