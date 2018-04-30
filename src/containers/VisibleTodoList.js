import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";

export function getTodoListFrom(state) {
    return Object.values(state.todos);
}

export function mapStateToProps(state) {
    return {
        todos: getTodoListFrom(state)
    };
}

export default connect(mapStateToProps)(TodoList);
