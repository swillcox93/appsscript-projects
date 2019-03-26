<template>
  <div>
    <b-container class="container" fluid>
      <b-row class="container">
        <b-col id="left" cols="3">
          <b-form class="bform">
            <b-form-input
              class="bform"
              input
              id="uinput"
              step="1E-1"
              type="number"
              v-model="uinput"
              required
              placeholder="Initial dose"
            ></b-form-input>
            <b-form-input
              class="bform"
              id="rows"
              type="number"
              v-model="rows"
              required
              placeholder="Initial dose"
            ></b-form-input>
            <b-form-textarea class="bform" id="noiseArr" v-model="noiseArr"></b-form-textarea>
            <b-button @click="showModal">View Graphs</b-button>
          </b-form>
        </b-col>
        <b-col id="right" cols="9">
          <b-tabs>
            <b-tab title="graph">
              <div class="table">
                <b-table class="td" striped hover :items="provider"></b-table>
              </div>
            </b-tab>
            <b-tab title="charts">
              <div class="table" ref="myModalRef">
                <h1 class="my-4">Welcome to Scotts Graphs</h1>
                <h2>home of the Scotts graph.</h2>
                <canvas id="chart"></canvas>
              </div>
              <div class="container">
                <line-chart v-if="loaded" :chartdata="chartdata" :options="options"/>
              </div>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { GraphData } from "@/lib/GraphData";

import _ from "lodash";
export default {
  data() {
    return {
      uinput: 1e-3,
      rows: 20,
      noiseArr: [
        0.33599008,
        0.7254017357,
        0.538389962,
        0.9808202199,
        0.2957488929,
        0.8504724979,
        0.1857151908,
        0.9443163872,
        0.006625569728,
        0.9712317865,
        0.0456936755,
        0.03441390119,
        0.1113148953,
        0.2582445355,
        0.7389413603,
        0.9393672408,
        0.6785066161,
        0.8744979777,
        0.2052015907,
        0.2979287541,
        0.6700029061,
        0.3647094993,
        0.4813643429,
        0.1404884197,
        0.3353435382
      ].toString()
    };
  },
  methods: {
    showModal() {
      this.doCharts();
    },
    doCharts() {
      const chart = document.getElementById("chart");
      const graph = new GraphData(this.uinput, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(
        this.rows,
        this.noiseArr.replace("\n", "").split(",")
      );
      let rels = _.map(graph, "relEffects");
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  computed: {
    provider() {
      return new GraphData(this.uinput, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(
        this.rows,
        this.noiseArr.split(",")
      );
    }
  }
};
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0;
  position: relative;
}
body {
  overflow: hidden;
}

#noiseArr {
  height: 200px;
}
#right {
  width: 100;
  position: relative;
}
</style>
