  <template>
  <div class="small">
    <b-container class="container" fluid>
      <b-row class="container">
        <b-col id="left" cols="3">
          <b-form class="bform">
            <h6>Data Set</h6>
            <p>Please enter your datapoints, seperated by commas</p>
            <b-form-textarea class="bform" id="userdata" v-model="userdata"></b-form-textarea>
            <b-button @click="changeData">View Graphs</b-button>
          </b-form>
        </b-col>
        <b-col id="right" cols="9">
          <b-tabs>
            <b-tab title="graph">
              <div class="table">
                <!-- <b-table class="td" striped hover :items="provider"></b-table> -->
              </div>
            </b-tab>
            <b-tab title="charts">
              <div class="table" ref="myModalRef">
                <h2>home of the Scotts graph.</h2>
              </div>
              <div class="container">
                <button v-on:click="changeData">Change data</button>
                <line-chart
                  :dc="dataChart"

                ></line-chart>
              </div>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LineChart from "./charts/LineChart.vue";
import { GraphData } from "@/lib/GraphData";
// let noiseArr = [
//   0.33599008,
//   0.7254017357,
//   0.538389962,
//   0.9808202199,
//   0.2957488929,
//   0.8504724979,
//   0.1857151908,
//   0.9443163872,
//   0.006625569728,
//   0.9712317865,
//   0.0456936755,
//   0.03441390119,
//   0.1113148953,
//   0.2582445355,
//   0.7389413603,
//   0.9393672408,
//   0.6785066161,
//   0.8744979777,
//   0.2052015907,
//   0.2979287541,
//   0.6700029061,
//   0.3647094993,
//   0.4813643429,
//   0.1404884197,
//   0.3353435382
// ];
// const graph = new GraphData(0.001, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(
//   20,
//   this.noiseArr
// );
// console.log(graph);
// let rels = _.map(graph, "relEffects");
// console.log(rels);
export default {
  components: {
    LineChart
  },
  else: ".app",
  data() {
    return {
      message: "Hello World",
      userdata: "",
      dataChart: [10, 39, 10, 40, 39, 0, 0],
      test: [4, 4, 4, 4, 4, 4]
    };
  },
  methods: {
    changeData: function() {
      console.log("Changing data")
      this.dataChart = this.userdata.replace(/\s/g,'').split(",")
      // this.renderLineChart()
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
.container {
  padding: 0;
  margin: 0;
  position: relative;
}
body {
  overflow: hidden;
}

#userdata {
  height: 200px;
}

#right {
  width: 100;
  position: relative;
}
</style>
