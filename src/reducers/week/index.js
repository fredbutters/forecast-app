const initialState = {
    week: [
        {
            day: "Wed",
            image: "cloudy.png",
            hi: 77,
            low: 65
        },
        {
            day: "Thur",
            image: "sunny.png",
            hi: 77,
            low: 65
        },
        {
            day: "Fri",
            image: "sunny.png",
            hi: 77,
            low: 65
        },
        {
            day: "Sat",
            image: "partly_cloudy.png",
            hi: 70,
            low: 55
        },
        {
            day: "Sun",
            image: "sunny.png",
            hi: 77,
            low: 65
        },
        {
            day: "Mon",
            image: "sunny.png",
            hi: 79,
            low: 65
        },
        {
            day: "Tue",
            image: "sunny.png",
            hi: 80,
            low: 65
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
