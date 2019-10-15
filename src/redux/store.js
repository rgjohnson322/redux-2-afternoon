import {createStore, applyMiddleware, combineReducers} from "redux";
import promiseMiddleware from "redux-promise-middleware";
import budgetReducer from "./reducers/budgetReducer";
import UserReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: UserReducer
})



export default createStore(rootReducer, applyMiddleware(promiseMiddleware));