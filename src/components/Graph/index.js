import React from "react";
// import { Div } from "glamorous";
import { calculateSVGData, getLineSVG } from "../../helpers";

//https://danielpataki.com/svg-chart/

export const Graph = ({ data }) => {
    let graphData = [];
    data.forEach(item => {
        graphData.push({
            value: item.temp.english,
            label: item.temp.english,
            time: item.FCTTIME.hour
        });
    });
    let svgData = calculateSVGData(graphData);
    return (
        <svg width="700" height="150">
            <path
                d={getLineSVG(svgData)}
                fill="none"
                stroke="#5cc0c0"
                strokeWidth="5"
            />
            {svgData.map((coords, i) => {
                let posX = coords[0];
                let posY = coords[1];
                return (
                    <React.Fragment key={i * 9}>
                        <circle
                            cx={posX}
                            cy={posY}
                            r="4"
                            fill="#FFA500"
                            stroke="#CC8400"
                            strokeWidth="2"
                        />
                        <text
                            key={i * 8}
                            x={posX - 10}
                            y={posY - 10}
                            fontFamily="sans-serif"
                            fontSize="20px"
                            fill="#000"
                        >
                            {`${coords[2]}°`}
                        </text>
                    </React.Fragment>
                );
            })}
        </svg>
    );
};
