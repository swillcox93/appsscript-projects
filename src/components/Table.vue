<template>
  <div class="table">
    <form>
      <label for="uinput">input</label>
      <input id="uinput" step="1E-1" type="number" v-model="uinput"/>
      <label for="rows">rows</label>
      <input id="rows" type="number" v-model="rows"/>
      <!-- put textfield here -->
    </form>

    <b-table class="td" striped hover :items="provider"></b-table>
  </div>
</template>

<script>
  import {GraphData} from "../lib/GraphData";
  // import 'bootstrap/dist/css/bootstrap.css'
  // import 'bootstrap-vue/dist/bootstrap-vue.css'
  let gd = new GraphData(1.00E-03, 1, 1, 2, 0.1, 0.5, 0.5, 1);

  // function provider(input) {
  //   return new GraphData(input, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(8);
  // }

  console.log(gd);
     const randoms = [
              0.33599008,
              0.7254017357,
              0.538389962,
              0.9808202199,
              0.2957488929,
              0.8504724979,
              0.1857151908,
              0.9443163872,
          ];
  export default {

    data(){
      return {
        uinput: 1E-3,
        rows: 8
      }
    },

    computed: {
      provider() {
        return new GraphData(this.uinput, 1, 1, 2, 0.1, 0.5, 0.5, 1)
          .rows(this.rows, randoms);
      }
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
