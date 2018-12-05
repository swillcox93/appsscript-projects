var assert = require('assert');
var chai = require("chai")
var sample = {
    massEffect: 1,
    eqlbDissl: 1,
    intlDose: 1.00E-03,
    doseStep: 2,
    stdDev: 0.1,
    absNoise: 0.5,
    relNoise: 0.5
};

function log10d(d) {
    return Math.log(d) / Math.LN10;
}

function relativeEffects(d) {
    return d / (d + sample.eqlbDissl)
}

approx = function (a, b, precision) {
    if (precision == null) {
        epsilon = 0.001;
    }
    return Math.abs(a - b) < epsilon;
};

describe('Functions tests', function () {
    it("Should transcripe exponetial something", function () {
        assert.equal(1.00E-03, 0.001);
    });
    it("Should find the log10 of 1", function () {
        assert.equal(log10d(10), 1);
    });
    it("Should calculate the log 10 of 'd'", function () {
        let res = Math.round(log10d(1.00E-03));
        assert.equal(res, -3);
    });
    it("Should calculate the same relative effect.", function () {
        let rel = relativeEffects(1.00E-03);
        assert.equal(approx(rel, 9.99E-04), true);
    });
    it("Should fail if precision is not met", function () {
        let rel = relativeEffects(1.00E-03);
        assert.equal(approx(rel, 1), false);
    });

});
