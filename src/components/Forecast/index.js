import React from "react";
import glamorous from "glamorous";

const Wrapper = glamorous.div({
    height: "110px",
    width: "100px",
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

const TempLow = glamorous.span({
    fontWeight: "bold",
    color: "#999",
    margin: "0 2px"
});

const TempHi = glamorous(TempLow)({
    color: "#ccc"
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
        <TempLow>{props.low}&#176; </TempLow>
        <TempHi>{props.hi}&#176; </TempHi>
    </Wrapper>
);
