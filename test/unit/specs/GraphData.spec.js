import { GraphData } from '@/lib/GraphData';
import { approx } from '@/lib/util';
describe('GraphData', function () {
  const input = 1.0e-3
  const noiseConst = 0.33599008
  let calc = function () {
    return new GraphData(input, 1, 1, 2, 0.1, 0.5, 0.5, 1)
  };
  describe('Table population test against a known set of seeds', function () {
    describe('Thoroughly verify the first row.', function () {
      const row1 = calc().row(input, null, noiseConst)
      it('Calculate the log1d', function () {
        expect(row1.log10d).toBeCloseTo(-3, 4)
      })
      it('Calculate the relative effects', function () {
        expect(row1.relEffects).toBeCloseTo(0.000999000999, 6)
      })
      it('Calculate the absolute noise', function () {
        expect(row1.noiseAbsolute).toBeCloseTo(-0.04228657977, 3)
      })
      it('Calculate the relative noise', function () {
        expect(row1.noiseRelative).toBeCloseTo(-0.00004224433544, 7)
      })
      it('Calculate the relative effects+absolute noise', function () {
        expect(row1.effectAbsNoise).toBeCloseTo(-0.04128757877, 3)
      })
      it('Calculate the relative effects+relative noise', function () {
        expect(row1.effectRelNoise).toBeCloseTo(0.0009567566636, 6)
      })
      it('Calculate the relative combined effects', function () {
        expect(row1.combinedNoise).toBeCloseTo(-0.02116441205, 3)
      })
      it('Calculate the relative combined effects', function () {
        expect(row1.combinedNoiseEffect).toBeCloseTo(-0.02016541105, 3)
      })
    })
    describe('Thoroughly verify the 8th row.', function () {
      const randoms = [
        0.33599008,
        0.7254017357,
        0.538389962,
        0.9808202199,
        0.2957488929,
        0.8504724979,
        0.1857151908,
        0.9443163872
      ]

      let gd2 = calc()
      let rows = gd2.rows(8, randoms)
      let row8 = rows[7]
      it('Calculate the log1d', function () {
        expect(row8.log10d).toBeCloseTo(-0.8927900304, 2)
      })
      it('Calculate the relative effects', function () {
        expect(row8.relEffects).toBeCloseTo(0.1134751773, 2)
      })
      it('Calculate the absolute noise', function () {
        expect(row8.noiseAbsolute).toBeCloseTo(0.1564921694, 2)
      })
      it('Calculate the relative noise', function () {
        expect(row8.noiseRelative).toBeCloseTo(0.01775797667, 3)
      })
      it('Calculate the relative effects+absolute noise', function () {
        expect(row8.effectAbsNoise).toBeCloseTo(0.2699673467, 2)
      })
      it('Calculate the relative effects+relative noise', function () {
        expect(row8.effectRelNoise).toBeCloseTo(0.131233154, 2)
      })
      it('Calculate the relative combined effects', function () {
        expect(row8.combinedNoise).toBeCloseTo(0.08712507304, 3)
      })
      it('Calculate the relative combined effects', function () {
        expect(row8.combinedNoiseEffect).toBeCloseTo(0.2006002503, 1)
      })
    })
  })
})
