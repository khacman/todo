import { combineReducers, createStore } from "redux";
import todos from "./todos";
import filter from "./filter";

const rootReducer = combineReducers({
    todos,
    filter
});

export const store = createStore(rootReducer);
