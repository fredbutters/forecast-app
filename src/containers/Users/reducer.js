import produce from "immer";

let initialState = { users: [], selectedUser: {}, userCount: 5 };
export const reducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case "LOAD_USERS":
                draft.users = action.payload.response.results;
                break;
            case "SELECT_USER":
                draft.selectedUser = action.payload;
                break;
            case "GET_USERS":
                draft.users = action.payload.response.results;
                break;
            case "GET_USERS_START":
                draft.users = {};
                break;
            case "CLEAR_SELECTED_USER":
                draft.selectedUser = {};
                break;
            case "SET_USER_COUNT":
                draft.userCount = action.payload;
                break;
        }
        return draft;
    });
