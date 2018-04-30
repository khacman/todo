export const FILTER = Object.freeze({
    SHOW_ALL: "SHOW_ALL",
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_COMPLETED: "SHOW_COMPLETED"
});
// Actions
const ACTIONS = "todo/filter";
export const SET_FILTER = `${ACTIONS}/SET_FILTER`;
// Reducer
export default function reducer(state = FILTER.SHOW_ALL, action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
// Action creators
export function setFilter(filter) {
    if (!Object.values(FILTER).includes(filter)) {
        throw new Error("Unknown filter");
    }
    return {
        type: SET_FILTER,
        filter
    };
}
