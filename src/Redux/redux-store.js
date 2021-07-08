import { combineReducers, createStore, applyMiddleware  } from "redux";
import authReducer from "./auth-reducer";
import paymentsReducer from "./payments-reducer";
import todoReducer from "./todo-reducer";
import thunk from 'redux-thunk'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    todoPage: todoReducer,
    paymentsPage: paymentsReducer,
    auth: authReducer,
    app: appReducer

});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
window.store = store;