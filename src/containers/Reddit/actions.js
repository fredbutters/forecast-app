export const load = payload => {
    return {
        type: "LOAD_REDDIT",
        payload
    };
};

export const loadStart = () => {
    return {
        type: "LOAD_START_REDDIT",
        isLoading: true
    };
};

export const loadEnd = () => {
    return {
        type: "LOAD_END_REDDIT"
    };
};
