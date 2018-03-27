export const load = payload => {
    return {
        type: "LOAD_USERS",
        payload
    };
};

export const loadStart = () => {
    return {
        type: "LOAD_START_USERS"
    };
};

export const loadEnd = () => {
    return {
        type: "LOAD_END_USERS"
    };
};

export const selectUser = payload => {
    return {
        type: "SELECT_USER",
        payload
    };
};

export const clearSelectedUser = () => {
    return {
        type: "CLEAR_SELECTED_USER"
    };
};

export const getUsersStart = () => {
    return {
        type: "GET_USERS_START"
    };
};

export const getUsers = payload => {
    return {
        type: "GET_USERS",
        payload
    };
};

export const getUsersEnd = () => {
    return {
        type: "GET_USERS_END"
    };
};

export const setUserCount = payload => {
    return {
        type: "SET_USER_COUNT",
        payload
    };
};
