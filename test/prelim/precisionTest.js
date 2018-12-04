// const gd = require("../../src/lib/GraphData");
// const assert = require('assert');
// const chai = require("chai");
// const approx = require("../../src/lib/util").approx;
// Number.prototype.truncate = function (n) {
//     return Math.floor(this.valueOf() * n) / n;
// };
// const input = 1.00E-03;
// let calc = function () {
//     return new gd.GraphData(input, 1, 1, 2, 0.1, 0.5, 0.5, 1);
// };
// const noiseConst = 0.33599008;
// describe("Table population test against a known set of seeds", function() {
//     describe("Thoroughly verify the first row.", function () {
//         const row1 = calc().row(input, null, noiseConst);
//         it("Calculate the log1d", function () {
//             assert.equal(Math.floor(row1.log10d), -3);
//         });
//         it("Calculate the relative effects", function () {
//             assert.equal(approx(row1.relEffects, 0.000999000999, 1E-12), true);
//         });
//         it("Calculate the absolute noise", function () {
//             assert.equal(approx(row1.noiseAbsolute, -0.04228657977, 1E-11), true);
//         });
//         it("Calculate the relative noise", function () {
//             assert.equal(approx(row1.noiseRelative, -0.00004224433544, 1E-11), true);
//         });
//         it("Calculate the relative effects+absolute noise", function () {
//             assert.equal(approx(row1.effectAbsNoise, -0.04128757877, 1E-11), true);
//         });
//         it("Calculate the relative effects+relative noise", function () {
//             assert.equal(approx(row1.effectRelNoise, 0.0009567566636, 1E-11), true);
//         });
//         it("Calculate the relative combined effects", function () {
//             assert.equal(approx(row1.combinedNoise, -0.02116441205, 1E-11), true);
//         });
//         it("Calculate the relative combined effects", function () {
//             assert.equal(approx(row1.combinedNoiseEffect, -0.02016541105, 1E-11), true);
//         });
//     });
//     describe("Thoroughly verify the 8th row.", function () {
//         const input = 1.00E-03;
//
//         const randoms = [
//             0.33599008,
//             0.7254017357,
//             0.538389962,
//             0.9808202199,
//             0.2957488929,
//             0.8504724979,
//             0.1857151908,
//             0.9443163872,
//         ];
//
//         let calc = function () {
//             return new gd.GraphData(input, 1, 1, 2, 0.1, 0.5, 0.5, 1);
//         };
//         let gd2 = calc();
//         let rows = gd2.rows(8, randoms);
//         let row8 = rows[7];
//         it("Calculate the log1d", function () {
//             assert.equal(approx(row8.log10d, -0.8927900304, 1E11), true);
//         });
//         it("Calculate the relative effects", function () {
//             assert.equal(approx(row8.relEffects, 0.1134751773, 1E-11), true);
//         });
//         it("Calculate the absolute noise", function () {
//             assert.equal(approx(row8.noiseAbsolute, 0.1564921694, 1E-11), true);
//         });
//         it("Calculate the relative noise", function () {
//             assert.equal(approx(row8.noiseRelative, 0.01775797667, 1E-11), true);
//         });
//         it("Calculate the relative effects+absolute noise", function () {
//             assert.equal(approx(row8.effectAbsNoise, 0.2699673467, 1E-10), true);
//         });
//         it("Calculate the relative effects+relative noise", function () {
//             assert.equal(approx(row8.effectRelNoise, 0.131233154, 1E-8), true);
//         });
//         it("Calculate the relative combined effects", function () {
//             assert.equal(approx(row8.combinedNoise, 0.08712507304, 1E-11), true);
//         });
//         it("Calculate the relative combined effects", function () {
//             assert.equal(approx(row8.combinedNoiseEffect, 0.2006002503, 1E-2), true);
//         });
//     });
// });
