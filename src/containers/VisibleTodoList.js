import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";
import { FILTER } from "../flux/filter";
import { toggleTodo } from "../flux/todos";

export function getTodoListFrom(state) {
    const fullList = Object.values(state.todos);
    switch (state.filter) {
        case FILTER.SHOW_ACTIVE:
            return fullList.filter(todo => todo.active);
        case FILTER.SHOW_COMPLETED:
            return fullList.filter(todo => !todo.active);
        default:
            return fullList;
    }
}

export function mapStateToProps(state) {
    return {
        todos: getTodoListFrom(state)
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        toggleTodo: id => {
            dispatch(toggleTodo(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
