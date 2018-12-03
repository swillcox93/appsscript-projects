exports.approx = function (a, b, precision) {
    if (precision == null) {
        precision = 0.001;
    }
    // console.log("a is: ["+a+"]");
    // console.log("b is: ["+b+"]");
    // console.log("diff is: ["+Math.abs(a - b) < precision+"]");

    return Math.abs(a - b) < precision;
};

exports.truncate = function(input, n){
    return Math.floor(input * n) / n;
};