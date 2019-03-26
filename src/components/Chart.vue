  <template>
  <b-tabs class="tabs">
    <b-tab title="generate" class="tab">
      <b-container class="container" fluid>
        <b-row>
          <b-col id="left" cols="5">
            <b-form class="bform">
              <label for="uinput" v-tooltip="'Enter the ammount of noradrenaline used'">
                <h5>10⁻³ml Noradrenaline added</h5>
                <b-input
                  type="text"
                  name="uinput"
                  id="uinput"
                  v-model="uinput"
                  v-tooltip="'Volume of noradrenaline'"
                />
              </label>
            </b-form>
            <b-button @click="changeData">View Graphs</b-button>
            <line-chart :dd="defaultData"></line-chart>
            <p>
              Compared to the theoretical dose-response curve are your plot points
              are adequate?
            </p>
          </b-col>
          <b-col id="right" cols="5">
            <div class="table" ref="myModalRef">
              <h2>Generated Traces for Noradrenaline</h2>
            </div>
            <div class="container table">
              <b-table class="td" striped hover :items="provider"></b-table>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-tab>
    <b-tab title="input">
      <b-container class="container" fluid>
        <b-row class="container">
          <b-col id="left" cols="3">
            <b-form class="bform">
              <h6>Data Set</h6>
              <label for="uinput">
                <h5>10⁻³ml Noradrenaline added</h5>
                <b-input type="text" name="uinput" id="uinput" v-model="uinput"/>
              </label>
              <p>Please enter your datapoints, seperated by commas</p>
              <b-form-textarea class="bform" id="userdata" v-model="userdata"></b-form-textarea>
              <b-button @click="changeData">View Graphs</b-button>
            </b-form>
          </b-col>
          <b-col id="right" cols="8">
            <div class="table" ref="myModalRef">
              <h2>home of the Scotts graph.</h2>
            </div>
            <div class="container">
              <line-chart :dc="dataChart" :dd="defaultData"></line-chart>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-tab>
  </b-tabs>
</template>

<script>
import LineChart from "./charts/LineChart.vue";
import SingleLineChart from "./charts/SingleLineChart.vue";

import { GraphData } from "@/lib/GraphData";
let noises = [
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
];

console.log(noises);
let gr = new GraphData(1e-3, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(20, noises);
let t = _.map(gr, "relEffects");
console.log(t);
export default {
  components: {
    LineChart
  },
  data() {
    return {
      message: "Hello World",
      userdata: "",
      rows: 15,
      uinput: 1e-3,
      dataChart: [],
      test: [4, 4, 4, 4, 4, 4],
      defaultData: t
    };
  },
  methods: {
    changeData: function() {
      console.log("Changing data");
      this.dataChart = this.userdata.replace(/\s/g, "").split(",");
      let gr2 = new GraphData(this.uinput, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(
        20,
        noises
      );
      this.defaultData = _.map(gr2, "relEffects");
      // this.renderLineChart()
    }
  },
  computed: {
    provider() {
      return new GraphData(this.uinput, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(
        this.rows,
        noises
      );
    }
  }
};
</script>

<style>
#app {
  overflow: scroll;
}
.container {
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
}
body {
  overflow-x: hidden;
}

#userdata {
  height: 200px;
}
.tabs {
  position: relative;
  width: 100%;
}
.row {
  position: relative;
  width: 100%;
}

.tab {
  position: relative;
  width: 1920px;
}
#right {
  width: 100;
  position: relative;
}
</style>
