import * as d3 from "d3";

export const getLineSVG = data => {
    var lineGenerator = d3
        .line()
        .x(function(d) {
            return d[0];
        })
        .y(function(d) {
            return d[1];
        })
        .curve(d3.curveCardinal);

    return lineGenerator(data);
};

export const calculateSVGData = (graphData, width = 500, height = 150) => {
    let values = graphData.map(item => item.value);
    var min = Math.floor(Math.min.apply(null, values) * 0.95);
    var max = Math.ceil(Math.max.apply(null, values) * 1.05);

    return graphData.map(function(obj, i) {
        var yRatio = (max - min) / height;
        var xRatio = width / (values.length - 2);

        var y = height - (obj.value - min) / yRatio;
        var x = xRatio * i - xRatio / 2;
        return [x, y, obj.label];
    });
};

//https://danielpataki.com/svg-chart/
