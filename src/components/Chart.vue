  <template>
  <div class="small">
    <b-tabs>
      <b-tab title="generate">
        <div class="table">
          <b-table class="td" striped hover :items="provider"></b-table>

          <!-- <b-table class="td" striped hover :items="provider"></b-table> -->
        </div>
      </b-tab>
      <b-tab title="input">
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
              <div class="table" ref="myModalRef">
                <h2>home of the Scotts graph.</h2>
              </div>
              <div class="container">
                <line-chart :dc="dataChart"></line-chart>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import LineChart from "./charts/LineChart.vue";
import { GraphData } from "@/lib/GraphData";
import { noises } from "@/lib/util.js";
export default {
  components: {
    LineChart
  },
  else: ".app",
  data() {
    return {
      message: "Hello World",
      userdata: "",
      uinput: 1e-3,
      dataChart: [10, 39, 10, 40, 39, 0, 0],
      test: [4, 4, 4, 4, 4, 4]
    };
  },
  methods: {
    changeData: function() {
      console.log("Changing data");
      this.dataChart = this.userdata.replace(/\s/g, "").split(",");
      // this.renderLineChart()
    }
  },
  computed: {
    provider() {
      return new GraphData(this.uinput, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(
        this.rows,
        noises()
      );
    }
  }
};
</script>

<style>
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
