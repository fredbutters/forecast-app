import React from "react";
import glamorous, { Div } from "glamorous";
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
            {svgData.map((coordinates, i) => {
                return (
                    <path
                        key={i * 3}
                        d={getLineSVG(svgData)}
                        fill="none"
                        stroke="#5cc0c0"
                        strokeWidth="5"
                    />
                );
            })}
            {svgData.map((coordinates, i) => {
                return (
                    <circle
                        key={i * 9}
                        cx={coordinates[0]}
                        cy={coordinates[1]}
                        r="4"
                        fill="#FFA500"
                        stroke="#CC8400"
                        strokeWidth="2"
                    />
                );
            })}
            {svgData.map((coordinates, i) => {
                return (
                    <text
                        key={i * 8}
                        x={coordinates[0] - 10}
                        y={coordinates[1] - 10}
                        fontFamily="sans-serif"
                        fontSize="20px"
                        fill="#000"
                    >
                        {`${coordinates[2]}°`}
                    </text>
                );
            })}
        </svg>
    );
};
