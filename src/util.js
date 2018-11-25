exports.approx = function (a, b, precision) {
    if (precision == null) {
        precision = 0.001;
    }

    return Math.abs(a - b) < precision;
};

exports.truncate = function(input, n){
    return Math.floor(input * n) / n;
};