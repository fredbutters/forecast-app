export const load = payload => {
    return {
        type: "FORECAST_LOAD",
        payload: payload
    };
};

export const loadStart = () => {
    return {
        type: "FORECAST_LOAD_START"
    };
};

export const loadEnd = () => {
    return {
        type: "FORECAST_LOAD_END"
    };
};

export const getHourly = payload => {
    return {
        type: "FORECAST_HOURLY",
        payload: payload
    };
};

export const getHourlyStart = () => {
    return {
        type: "FORECAST_HOURLY_START"
    };
};

export const getHourlyEnd = () => {
    return {
        type: "FORECAST_HOURLY_END"
    };
};
