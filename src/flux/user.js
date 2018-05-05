const USER_ACTION = "todo/user";
export const FETCHING = `${USER_ACTION}/FETCHING`;
export const SET_USER = `${USER_ACTION}/SET_USER`;

export default function reducer(
    state = { isLoading: false, userData: {} },
    action
) {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                isLoading: true
            };
        case SET_USER:
            return {
                ...state,
                userData: action.data,
                isLoading: false
            };
        default:
            return state;
    }
}

export function getUser() {
    return dispatch => {
        dispatch({ type: FETCHING });
        return fetch("http://localhost:3000/users/1")
            .then(res => res.json())
            .then(user => dispatch({ type: SET_USER, data: user }));
    };
}
