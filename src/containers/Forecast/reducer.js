import produce from "immer";
const initialState = { weeklyForecast: {}, hourly: {} };

export const reducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case "FORECAST_LOAD":
                draft.weeklyForecast = action.payload.week;
                break;
            case "FORECAST_HOURLY":
                draft.hourly = action.payload.hourly;
                break;
            default:
                return state;
        }
        return draft;
    });
