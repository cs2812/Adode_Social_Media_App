import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import AppReducer from "./App/AppReducer";

const reducers = combineReducers({ AppReducer });

export const store = legacy_createStore(reducers, applyMiddleware(thunk));
