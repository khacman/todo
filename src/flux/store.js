import { combineReducers, createStore } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({
    todos
});

export const store = createStore(rootReducer);
