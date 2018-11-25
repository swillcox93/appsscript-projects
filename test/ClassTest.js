const gd = require("../src/GraphData");
const assert = require('assert');
const util = require("../src/util");
describe("Class Structure test", function () {
    const input = 1.00E-03;
    const noiseConst = 0.9928133549;
    let calc = function () {
        return new gd.GraphData(input, 1, 1, 2, 0.1, 0.5, 0.5, 1);
    };
    it("calculate the correct logd of input", function () {
        assert.equal(Math.floor(calc().log10d()), -3);
    });
    it("calculate the correct RelEffects of input", function () {
        let likeness = util.approx(calc().relativeEffects(), 9.99E-04);
        assert.equal(likeness, true);
    });
    it("fail if precision is not met", function () {
        let likeness = util.approx(calc().relativeEffects(), 1);
        assert.equal(likeness, false);
    });
    it("calculate the absolute noise.", function () {
        let expected = 0.2363568723;
        let result = calc().absoluteNoise(noiseConst);
        assert.equal(util.truncate(result, 1E10), expected);
    });
    it("calculate the relative noise.", function () {
        let expected = 0.0002361207515;
        let result = calc().relativeNoise(noiseConst);
        let rounding1 = util.truncate(result, 1E12);
        let rounding2 = util.truncate(expected, 1E12);
        assert.equal(rounding1, rounding2);
    });
    it("calculate the absolute noise + relative effects.", function () {
        let expected = 0.2373558733;
        let result = calc().absNoiseAndEffect(noiseConst);
        let rounding1 = util.truncate(result, 1E10);
        let rounding2 = util.truncate(expected, 1E10);
        assert.equal(rounding1, rounding2);
    });
    it("calculate the absolute noise + relative effects.", function () {
        let expected = 0.001235121751;
        let result = calc().relNoiseAndEffect(noiseConst);
        let rounding1 = util.truncate(result, 1E10);
        let rounding2 = util.truncate(expected, 1E10);
        assert.equal(rounding1, rounding2);
    });
    it("calculate the combinedNoise", function () {
        let expected = 0.1182964965;
        let result = calc().combinedNoise(noiseConst);
        let rounding1 = util.truncate(result, 1E10);
        let rounding2 = util.truncate(expected, 1E10);
        assert.equal(rounding1, rounding2);
    });
   it("calculate the combinedNoise and effect", function () {
        let expected = 0.1192954975;
        let result = calc().combinedNoiseAndEffect(noiseConst);
        let rounding1 = util.truncate(result, 1E10);
        let rounding2 = util.truncate(expected, 1E10);
        assert.equal(rounding1, rounding2);
    });
});
