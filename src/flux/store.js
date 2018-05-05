import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import todos from "./todos";
import filter from "./filter";
import user from "./user";

const rootReducer = combineReducers({
    todos,
    filter,
    user
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
