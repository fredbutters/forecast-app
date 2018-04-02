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

export const loadError = error => {
    return {
        type: "LOAD_ERROR_REDDIT",
        error
    };
};
export const setSubRedditText = payload => {
    return {
        type: "SET_SUBREDDIT_TEXT",
        payload
    };
};

// export const getPosts = payload => {
//     return {
//         type: "GET_POSTS",
//         payload
//     };
// };

// export const getPostsStart = () => {
//     return {
//         type: "GET_POSTS_START"
//     };
// };

// export const getPostsEnd = () => {
//     return {
//         type: "GET_POSTS_END"
//     };
// };
