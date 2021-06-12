import { combineReducers, createStore } from "redux";
import paymentsReducer from "./payments-reducer";
import todoReducer from "./todo-reducer";

let reducers = combineReducers({
    todoPage: todoReducer,
    paymentsPage: paymentsReducer,
});

let store = createStore(reducers);

export default store;