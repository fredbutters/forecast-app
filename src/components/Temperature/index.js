import React from "react";
import glamorous from "glamorous";

export const Temp = glamorous.span(
    {
        fontWeight: "bold",
        margin: "0 2px",
        "&::after": {
            content: "°"
        }
    },
    ({ low = false }) => ({
        color: low ? "#ccc" : "#999"
    })
);
