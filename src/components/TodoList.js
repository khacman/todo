import React from "react";
import { Todo } from "./Todo";
import PropTypes from "prop-types";

export function TodoList({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} onClick={toggleTodo} />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired
};
