import React from "react";
import PropTypes from "prop-types";

export function Todo({ todo }) {
    return <li>{todo.content}</li>;
}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    })
};
