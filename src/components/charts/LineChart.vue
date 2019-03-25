<script>
import { scrypt } from "crypto";

import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  props: ["dc", "options"],
  mounted() {
    this.renderLineChart();
  },
  computed: {
    chartData: function() {
      return this.dc;
    }
  },
  methods: {
    renderLineChart: function() {
      console.log("Rendering chart");
      return this.renderChart(
        {
          labels: this.chartData,
          datasets: [
            {
              label: "Data One",
              backgroundColor: "#f87979",
              data: this.chartData
            }
          ]
        },
        { responsive: true }
      );
    }
  },
  watch: {
    dc: function() {
      this.$data._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.renderLineChart();
    }
  }
};
</script>
