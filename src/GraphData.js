exports.GraphData = class {
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

    relativeNoise(noise) {
        let rand;
        if (noise == null)
            rand = this.random();
        else {
            rand = noise;
        }
        let relative = this.relativeEffects() * this.stdDev;
        return this.a_norminv(rand, 0, relative)
    }

    absNoiseAndEffect(noise) {
        return this.absoluteNoise(noise) + this.relativeEffects()
    }

    relNoiseAndEffect(noise) {
        return this.relativeNoise(noise) + this.relativeEffects()
    }

    combinedNoise(noise) {
        let absNoise = this.absoluteNoise(noise);
        let relNoise = this.relativeNoise(noise);
        return ((absNoise * this.absNoise) + (relNoise * this.relNoise))
            / this.sumOfMix;
    }

    combinedNoiseAndEffect(noise) {
        let cn = this.combinedNoise(noise);
        let effect = this.relativeEffects();
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
            init = this.userInput;
        else init = initial;
        if(previous != null){
            noise = noise == null ? previous.uniformRandom: noise;
        }
        noise = noise == null ? this.random() : noise;
        return {
            init: init,
            log10d: this.log10d(init),
            relEffects: this.relativeEffects(init),
            uniformRandom: noise,
            noiseAbsolute: this.absoluteNoise(noise),
            noiseRelative: this.relativeNoise(noise),
            effectAbsNoise: this.absNoiseAndEffect(noise),
            effectRelNoise: this.relNoiseAndEffect(noise),
            combinedNoise: this.combinedNoise(noise),
            combinedNoiseEffect: this.combinedNoiseAndEffect(noise)
        };
    }
};

