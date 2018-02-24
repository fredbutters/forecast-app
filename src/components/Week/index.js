import React from "react";
import glamorous from "glamorous";
import { Forecast } from "../Forecast";

export const Week = props => (
    <div>
        {props.week.map((index, i) => {
            return <Forecast {...index} />;
        })}
    </div>
);
