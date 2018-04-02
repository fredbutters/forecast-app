import produce from "immer";

let initialState = { data: {}, isLoading: false, subRedditText: "" };

export const reducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case "LOAD_START_REDDIT":
                draft.isLoading = true;
                draft.data = {};
                break;
            case "LOAD_REDDIT":
                draft.data = action.payload.data;
                break;
            case "LOAD_END_REDDIT":
                draft.isLoading = false;
                break;
            case "LOAD_ERROR_REDDIT":
                draft.error = action.error;
                break;
            case "SET_SUBREDDIT_TEXT":
                draft.subRedditText = action.payload;
                break;
        }
        return draft;
    });
