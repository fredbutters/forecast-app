export const load = payload => {
    return {
        type: "LOAD",
        payload
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

export const selectUser = payload => {
    return {
        type: "SELECT_USER",
        payload
    };
};
