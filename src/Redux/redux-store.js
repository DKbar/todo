import { combineReducers, createStore, applyMiddleware, compose  } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

/* let store = createStore(reducers, applyMiddleware(thunk)); */

export default store;
window.store = store;