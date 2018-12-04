<template>
  <div class="table">
    <h1>Hello</h1>
    <b-table class="td" striped hover :items="tableData"></b-table>
  </div>
</template>

<script>
  import GraphData from "../GraphData";
  // import 'bootstrap/dist/css/bootstrap.css'
  // import 'bootstrap-vue/dist/bootstrap-vue.css'
  let gd = new GraphData.GraphData(1.00E-03, 1, 1, 2, 0.1, 0.5, 0.5, 1);
  console.log(gd);
  export default {
    name: "Table",
    data() {
      return {
        tableData: gd.rows(20)

      };
    }
  }
</script>

<style scoped>
  html {
    width: 100%
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
