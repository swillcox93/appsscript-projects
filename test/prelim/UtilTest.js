const assert = require('assert');
const chai = require("chai");
const approx = require("../../src/lib/util").approx;

describe("Approximation tests", function () {
    describe("Suite to test accuracy as Integer range.", function () {
        it("Should return true if difference is < 1", function () {
            assert.equal(approx(1, 1.5, 1), true);
        });
        it("Should return fail if the difference is not < 1", function () {
            assert.equal(approx(1, 2, 1), false);
        });
        it("Should return true if difference is < 1 for negative numbers", function () {
            assert.equal(approx(-1, -1.5, 1), true);
        });
        it("Should return fail if the difference is not < 1 for negative numbers", function () {
            assert.equal(approx(-1, -2, 1), false);
        });

    });
    describe("Suite to test accuracy to factions and exponents.", function () {
        it("Should return true if difference is < 1E-3", function () {
            assert.equal(approx(0.001, 0.0015, 1E-3), true);

        });
        it("Should return fail if the difference is not < 1E-4", function () {
            assert.equal(approx(0.001, 0.0015, 1E-4), false);
        });
        it("Should return true if difference is < 1E2", function () {
            assert.equal(approx(1E1, 1E2, 1E2), true);

        });
        it("Should return fail if the difference is not < 1E2", function () {
            assert.equal(approx(1E1, 1E2, 1E1), false);
        });

    });
});
