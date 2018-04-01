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
