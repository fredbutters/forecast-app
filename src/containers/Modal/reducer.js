import produce from "immer";

const initialState = { show: false };

export const reducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case "MODAL_TOGGLE_SHOW":
                draft.show = !action.payload;
                break;
            default:
                return draft;
        }
        return draft;
    });
