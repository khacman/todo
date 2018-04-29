// Actions
const ACTION = "todo/todos";
export const ADD_TODO = `${ACTION}/ADD_TODO`;
export const TOGGLE_TODO = `${ACTION}/TOGGLE_TODO`;
// Reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
    case ADD_TODO:
        return {
            ...state,
            [action.todo.id]: action.todo
        };
    case TOGGLE_TODO:
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                active: !state[action.id].active
            }
        };
    default:
        return state;
    }
}
// Action Creators
export const addTodo = (function() {
    let id = 1;

    return function(content) {
        return {
            type: ADD_TODO,
            todo: {
                id: id++,
                content,
                active: true
            }
        };
    };
})();

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}
