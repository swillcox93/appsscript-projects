<template>
  <div class="table">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
    <form>
      <label for="uinput">input</label>
      <in ̰put id="uinput" step="1E-1" type="number" v-model="uinput"/>
      <label for="rows">rows</label>
      <input id="rows" type="number" v-model="rows">
      <!-- <label for="noise">noise</label>
      <textarea id="noise" type="number" v-model="noise"/> -->
    </form>

    <b-table class="td" striped hover :items="provider"></b-table>
  </div>
</template>

<script>
import { GraphData } from "../lib/GraphData";

export default {
  data() {
    return {
      uinput: 1e-3,
      rows: 8,

      // noise: [
      //   0.33599008,
      //   0.7254017357,
      //   0.538389962,
      //   0.9808202199,
      //   0.2957488929,
      //   0.8504724979,
      //   0.1857151908,
      //   0.9443163872
      // ].join("\n")
    };
  },

  computed: {
    provider() {
      let x = null;
      // if (/^(?: *\d+ *(?:\n|$))+$/.test(this.noise)) {
      //   x = this.noise.split("\n");
      // }
      return new GraphData(this.uinput, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(
        this.rows
      );
    }
  }
};
</script>

<style scoped>
html {
  width: 100%;
}

body {
  width: 80%;
  position: relative;
}

.table {
  max-width: 80%;
  position: relative;
}

.td {
  max-width: 100%;
  position: relative;
}
</style>
