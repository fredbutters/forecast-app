import React from "react";
import glamorous, { Div } from "glamorous";
import { calculateSVGData } from "../../helpers";

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
    let lineData = "";
    return (
        <svg>
            {svgData.map((coordinates, i) => {
                return (
                    <circle
                        key={i * 9}
                        cx={coordinates[0]}
                        cy={coordinates[1]}
                        r="4"
                        fill="red"
                        stroke="black"
                        strokeWidth="2"
                    />
                );
            })}
            {svgData.map((coordinates, i) => {
                let command = i === 0 ? "M" : "L";
                lineData = `${lineData} ${command} ${coordinates[0]}, ${
                    coordinates[1]
                }`;
                return (
                    <path
                        key={i * 3}
                        d={lineData}
                        fill="none"
                        stroke="#5cc0c0"
                        strokeWidth="5"
                    />
                );
            })}
        </svg>
    );
};
