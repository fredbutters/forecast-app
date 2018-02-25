import React from "react";
import glamorous from "glamorous";

import { Temp } from "../Temperature";

const Wrapper = glamorous.div({
    height: "100px",
    width: "90px",
    border: "1px solid transparent",
    padding: "5px",
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    "&:hover": {
        border: "1px solid #ddd",
        backgroundColor: "#eee"
    }
});

const Day = glamorous.div({
    fontSize: "18px",
    color: "#999"
});

export const Forecast = props => (
    <Wrapper>
        <Day>{props.day}</Day>
        <div>
            <img src={`../images/${props.image}`} />
        </div>
        <Temp low={true}>{props.low}</Temp>
        <Temp>{props.hi}</Temp>
    </Wrapper>
);
