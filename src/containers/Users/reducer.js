import immer from "immer";

let initialState = { users: [] };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD":
            return {
                ...state,
                users: action.payload.response.results
            };
        default:
            return state;
    }
};
