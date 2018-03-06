// import { load } from "../../containers/Week";
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

// const initialState = {
//     week: [
//         {
//             day: "Wed",
//             image: "cloudy.png",
//             hi: 77,
//             low: 65
//         },
//         {
//             day: "Thur",
//             image: "sunny.png",
//             hi: 77,
//             low: 65
//         },
//         {
//             day: "Fri",
//             image: "sunny.png",
//             hi: 77,
//             low: 65
//         },
//         {
//             day: "Sat",
//             image: "partly_cloudy.png",
//             hi: 70,
//             low: 55
//         },
//         {
//             day: "Sun",
//             image: "sunny.png",
//             hi: 77,
//             low: 65
//         },
//         {
//             day: "Mon",
//             image: "sunny.png",
//             hi: 79,
//             low: 65
//         },
//         {
//             day: "Tue",
//             image: "sunny.png",
//             hi: 80,
//             low: 65
//         }
//     ],

//     hourly: [
//         {
//             Wed: [
//                 {
//                     hour: 1,
//                     temp: 70,
//                     image: "cloudy.png"
//                 },
//                 {
//                     hour: 2,
//                     temp: 71,
//                     image: "cloudy.png"
//                 },
//                 {
//                     hour: 3,
//                     temp: 71,
//                     image: "cloudy.png"
//                 },
//                 {
//                     hour: 4,
//                     temp: 72,
//                     image: "cloudy.png"
//                 },
//                 {
//                     hour: 5,
//                     temp: 73,
//                     image: "cloudy.png"
//                 }
//             ],
//             Tue: [
//                 {
//                     hour: 1,
//                     temp: 70,
//                     image: "sunny.png"
//                 },
//                 {
//                     hour: 2,
//                     temp: 71,
//                     image: "sunny.png"
//                 },
//                 {
//                     hour: 3,
//                     temp: 71,
//                     image: "sunny.png"
//                 },
//                 {
//                     hour: 4,
//                     temp: 72,
//                     image: "sunny.png"
//                 },
//                 {
//                     hour: 5,
//                     temp: 73,
//                     image: "sunny.png"
//                 }
//             ]
//         }
//     ]
// };
