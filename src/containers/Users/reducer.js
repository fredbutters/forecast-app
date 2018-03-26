import produce from "immer";

let initialState = { users: [], selectedUser: {} };
export const reducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case "LOAD":
                draft.users = action.payload.response.results;
                break;
            case "SELECT_USER":
                draft.selectedUser = action.payload;
                break;
        }
        return draft;
    });

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "LOAD":
//             return {
//                 ...state,
//                 users: action.payload.response.results
//             };
//         case "SELECT_USER":
//             return {
//                 ...state,
//                 selectedUser: action.payload
//             };
//         default:
//             return state;
//     }
// };
