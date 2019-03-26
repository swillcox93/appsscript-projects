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
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Log10d"
        }
      }
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Response"
        }
      }
    ]
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
              backgroundColor: "rgba(255, 100, 55, 0.2)",
              data: this.chartData
            },
            {
              label: "Data One",
              backgroundColor: "rgba(76, 100, 233, 0.2)",
              data: this.defaultData
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
