export const SomeAction = () => {
    return { type: "TEST" };
};

export const GetHourly = day => {
    console.log("GetHourly action");
    return {
        type: "GET_HOURLY",
        day
    };
};
