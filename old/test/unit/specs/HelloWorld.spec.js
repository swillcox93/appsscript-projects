import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld';
import GraphData from '@/lib/GraphData';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
});

describe("Class Structure test", function () {
  const input = 1.00E-03;
  const noiseConst = 0.9928133549;
  let calc = function () {
    return new GraphData(input, 1, 1, 2, 0.1, 0.5, 0.5, 1);
  };
  it("calculate the correct logd of input", function () {
    expect(Math.floor(calc().log10d())).to.eq(-3);
  });
  // it("calculate the correct RelEffects of input", function () {
  //   let likeness = util.approx(calc().relativeEffects(), 9.99E-04);
  //   assert.equal(likeness, true);
  // });
  // it("fail if precision is not met", function () {
  //   let likeness = util.approx(calc().relativeEffects(), 1);
  //   assert.equal(likeness, false);
  // });
  // it("calculate the absolute noise.", function () {
  //   let expected = 0.2363568723;
  //   let result = calc().absoluteNoise(noiseConst);
  //   assert.equal(util.truncate(result, 1E10), expected);
  // });
  // it("calculate the relative noise.", function () {
  //   let expected = 0.0002361207515;
  //   let result = calc().relativeNoise(noiseConst);
  //   let rounding1 = util.truncate(result, 1E12);
  //   let rounding2 = util.truncate(expected, 1E12);
  //   assert.equal(rounding1, rounding2);
  // });
  // it("calculate the absolute noise + relative effects.", function () {
  //   let expected = 0.2373558733;
  //   let result = calc().absNoiseAndEffect(noiseConst);
  //   let rounding1 = util.truncate(result, 1E10);
  //   let rounding2 = util.truncate(expected, 1E10);
  //   assert.equal(rounding1, rounding2);
  // });
  // it("calculate the absolute noise + relative effects.", function () {
  //   let expected = 0.001235121751;
  //   let result = calc().relNoiseAndEffect(noiseConst);
  //   let rounding1 = util.truncate(result, 1E10);
  //   let rounding2 = util.truncate(expected, 1E10);
  //   assert.equal(rounding1, rounding2);
  // });
  // it("calculate the combinedNoise", function () {
  //   let expected = 0.1182964965;
  //   let result = calc().combinedNoise(noiseConst);
  //   let rounding1 = util.truncate(result, 1E10);
  //   let rounding2 = util.truncate(expected, 1E10);
  //   assert.equal(rounding1, rounding2);
  // });
  // it("calculate the combinedNoise and effect", function () {
  //   let expected = 0.1192954975;
  //   let result = calc().combinedNoiseAndEffect(noiseConst);
  //   let rounding1 = util.truncate(result, 1E10);
  //   let rounding2 = util.truncate(expected, 1E10);
  //   assert.equal(rounding1, rounding2);
  // });
  // it("calculate the first row.", function () {
  //   let gd = calc();
  //   let row1 = gd.row(null, null, 0.5264278546);
  //   assert.equal(Math.floor(row1.log10d), -3);
  //   let rounding1 = util.truncate(row1.combinedNoiseEffect, 1E10);
  //   let rounding2 = util.truncate(0.004316869504, 1E10);
  //   assert.equal(rounding1, rounding2);
  // });
  // it("should calculate the second row", function () {
  //   let gd = calc();
  //   let row1 = gd.row(null, null, 0.5264278546);
  //   let row2 = gd.row(null, row1, 0.824104585);
  //   let log10Result = row2.log10d.truncate(1E8);
  //   let log10Expected = -2.69897001;
  //   assert.equal(log10Result, log10Expected);
  //
  //   let row2cne = row2.combinedNoiseEffect;
  //   let row2cneExptected = 0.04935199214;
  //   let roundingError1 = row2cne.truncate(1E2);
  //   let roundingError2 = row2cneExptected.truncate(1E2);
  //
  //   assert.equal(roundingError1, roundingError2);
  //   let approx = util.approx(row2cne, row2cneExptected, 0.005);
  //   assert.equal(approx, true);
  //
  // });


});
