import immer from "immer";

let initialState = { users: [], selectedUser: {} };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD":
            return {
                ...state,
                users: action.payload.response.results
            };
        case "SELECT_USER":
            return {
                ...state,
                selectedUser: action.payload
            };
        default:
            return state;
    }
};
