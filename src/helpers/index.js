const _getValueArray = graphData => {
    return graphData.map(item => {
        return item.value;
    });
};

export const calculateSVGData = (graphData, width = 500, height = 150) => {
    var values = _getValueArray(graphData);
    return _getCoordinates(values, width, height);
};

const _getCoordinates = (values, width = 500, height = 150) => {
    var min = Math.floor(Math.min.apply(null, values) * 0.95);
    var max = Math.ceil(Math.max.apply(null, values) * 1.05);

    var yRatio = (max - min) / height;
    var xRatio = width / (values.length - 2);

    return values.map(function(value, i) {
        var y = height - (value - min) / yRatio;
        var x = xRatio * i - xRatio / 2;
        return [x, y];
    });
};
