import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ColorReducer } from "../Reducer/ColorReducer";
import { CounterReducer } from "../Reducer/CounterReducer";


const CombineReducer = combineReducers({
    CounterReducer,
    ColorReducer,
})

export const store2 = createStore(CombineReducer, composeWithDevTools())