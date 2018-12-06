export class GraphData {
    constructor(input,
        massEffect,
        eqlbDissl,
        doseStep,
        stdDev,
        absNoise,
        relNoise,
        sum) {
        this.userInput = input;
        this.massEffect = massEffect;
        this.eqlbDissl = eqlbDissl;
        this.doseStep = doseStep;
        this.stdDev = stdDev;
        this.absNoise = absNoise;
        this.relNoise = relNoise;
        this.sumOfMix = sum
    }

    log10d(initial) {
        let init;
        if (initial == null)
            init = this.userInput;
        else init = initial;
        return Math.log(init) / Math.LN10;
    }

    relativeEffects(initial) {
        let init;
        if (initial == null)
            init = this.userInput;
        else init = initial;
        return init / (init + this.eqlbDissl);
    }

    random() {
        return Math.random()
    }

    absoluteNoise(noise) {
        let rand;
        if (noise == null)
            rand = this.random();
        else {
            rand = noise;
        }
        let mu = 0;
        return this.a_norminv(rand, mu, this.stdDev)
    }

    relativeNoise(noise, initial) {
        let rand;
        if (noise == null)
            rand = this.random();
        else {
            rand = noise;
        }
        let relative = this.relativeEffects(initial) * this.stdDev;
        return this.a_norminv(rand, 0, relative)
    }

    absNoiseAndEffect(noise, initial) {
        return this.absoluteNoise(noise) + this.relativeEffects(initial)
    }

    relNoiseAndEffect(noise, initial) {
        return this.relativeNoise(noise, initial) + this.relativeEffects(initial)
    }

    combinedNoise(noise, initial) {
        let absNoise = this.absoluteNoise(noise);
        let relNoise = this.relativeNoise(noise, initial);
        return ((absNoise * this.absNoise) + (relNoise * this.relNoise))
            / this.sumOfMix;
    }

    combinedNoiseAndEffect(noise, init) {
        let cn = this.combinedNoise(noise);
        let effect = this.relativeEffects(init);
        return cn + effect;
    }

    a_norminv(x, mu, sig) {
        let xp = Math.abs(0.5 - x);
        let xp_inv = mu + sig *
            Math.sqrt(-Math.PI * Math.log(1 - 4 * xp * xp) / 2.0);
        if (x >= 0.5) {
            return xp_inv;
        } else {
            return -xp_inv;
        }
    }

    row(initial, previous, noise) {
        let init;
        if (initial == null)
            if (previous != null) {
                init = previous.init * this.doseStep;
            } else {
                init = this.userInput;
            }
        else init = initial;
        if (previous != null) {
            noise = noise == null ? previous.uniformRandom : noise;
        }
        noise = noise == null ? this.random() : noise;
        return {
            row: previous == null ? 0 : previous.row + 1,
            init: init,
            log10d: this.log10d(init),
            relEffects: this.relativeEffects(init),
            uniformRandom: noise,
            noiseAbsolute: this.absoluteNoise(noise),
            noiseRelative: this.relativeNoise(noise, init),
            effectAbsNoise: this.absNoiseAndEffect(noise, init),
            effectRelNoise: this.relNoiseAndEffect(noise, init),
            combinedNoise: this.combinedNoise(noise, init),
            combinedNoiseEffect: this.combinedNoiseAndEffect(noise, init)
        };
    }

    rows(n, noises) {
        let noise1 = (noises == null || noises.length == 0) ?
            this.random() : noises[0];
        let row1 = this.row(null, null, noise1);
        let rows = [row1];
        for (let i = 1; i < n; i++) {
            let noise = (noises == null || noises.length < i)
                ? this.random() : noises[i];
            rows[i] = this.row(null, rows[rows.length - 1], noise);
        }
        return rows;
    }
};
