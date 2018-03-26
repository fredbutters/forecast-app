const initialState = { weeklyForecast: {} };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD":
            return {
                ...state,
                weeklyForecast: action.payload.week
            };
        default:
            return state;
    }
};
