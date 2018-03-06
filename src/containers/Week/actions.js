export const load = payload => {
    return {
        type: "LOAD",
        payload: payload
    };
};

export const loadStart = () => {
    return {
        type: "LOAD_START"
    };
};

export const loadEnd = () => {
    return {
        type: "LOAD_END"
    };
};
