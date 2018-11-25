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

    truncate(input, n) {
        return Math.floor(input * n) / n;
    }

    log10d() {
        return Math.log(this.userInput) / Math.LN10;
    }

    relativeEffects() {
        return this.userInput / (this.userInput + this.eqlbDissl);
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
        return ((absNoise * this.absNoise) + (relNoise * this.relNoise)) / this.sumOfMix;
    }
    combinedNoiseAndEffect(noise){
        let cn = this.combinedNoise(noise);
        let effect = this.relativeEffects();
        return cn+effect;
    }
    a_norminv(x, mu, sig) {
        let xp = Math.abs(0.5 - x);

        let xp_inv = mu + sig * Math.sqrt(-Math.PI * Math.log(1 - 4 * xp * xp) / 2.0);

        if (x >= 0.5) {
            return xp_inv;
        } else {
            return -xp_inv;
        }

    }
};

