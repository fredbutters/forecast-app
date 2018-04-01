import produce from "immer";

let initialState = { data: {} };

export const reducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case "LOAD_REDDIT":
                draft = action.payload;
                break;
        }
        return draft;
    });
