<script>
import { scrypt } from "crypto";

import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  props: ["dc", "options", "dd"],
  mounted() {
    this.renderLineChart();
  },
  computed: {
    chartData: function() {
      return this.dc;
    },

    defaultData: function() {
      return this.dd;
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
      console.log("Dat is" + this.dd);
      return this.renderChart(
        {
          labels: this.dd,
          datasets: [
            {
              label: "Theoretical",
              backgroundColor: "rgba(255, 100, 55, 0.2)",
              data: this.dc
            },
            {
              label: "Actual",
              backgroundColor: "rgba(76, 100, 233, 0.2)",
              data: this.dd
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
    },
    dd: function() {
      this.$data._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.renderLineChart();
    }
  }
};
</script>
