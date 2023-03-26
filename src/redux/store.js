import { combineReducers, createStore } from "redux"
import categoriesReducer from "./reducers/categoriesReducer"

const rootReducer = combineReducers({
    categoriesState: categoriesReducer
})

const store = createStore(rootReducer)

export default store