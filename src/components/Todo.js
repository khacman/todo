import React from "react";
import PropTypes from "prop-types";

export function Todo({ todo, onClick }) {
    return (
        <li
            onClick={() => onClick(todo.id)}
            style={{
                textDecoration: todo.active ? "none" : "line-through"
            }}
        >
            {todo.content}
        </li>
    );
}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    }),
    onClick: PropTypes.func.isRequired
};
