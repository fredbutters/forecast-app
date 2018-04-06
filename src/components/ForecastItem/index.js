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

export const ForecastItem = props => (
    <Wrapper onClick={props.handleClick}>
        <Day>{props.date.weekday_short}</Day>
        <div>
            <img alt="weather" src={props.icon_url} />
        </div>
        <Temp low={true}>{props.low.fahrenheit}</Temp>
        <Temp>{props.high.fahrenheit}</Temp>
    </Wrapper>
);
