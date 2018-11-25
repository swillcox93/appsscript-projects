exports.approx = function (a, b, precision) {
    if (precision == null) {
        epsilon = 0.001;
    }
    return Math.abs(a - b) < epsilon;
};

exports.truncate = function(input, n){
    return Math.floor(input * n) / n;
};