import React from "react";
import { Todo } from "./Todo";
import PropTypes from "prop-types";

export function TodoList({ todos }) {
    return <ul>{todos.map(todo => <Todo key={todo.id} todo={todo} />)}</ul>;
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};