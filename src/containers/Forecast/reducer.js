const initialState = { weeklyForecast: {}, hourly: {} };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FORECAST_LOAD":
            return {
                ...state,
                weeklyForecast: action.payload.week
            };
            break;
        case "FORECAST_HOURLY":
            return {
                ...state,
                hourly: action.payload.hourly
            };
            break;
        default:
            return state;
    }
};
