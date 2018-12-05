<template>
  <div class="table">
    <form>
      <label for="uinput">input</label>
      <input id="uinput" step="1E-1" type="number" v-model="uinput"/>
      <label for="rows">rows</label>
      <input id="rows" type="number" v-model="rows"/>
      <!--TextArea-->
      <textarea id="noiseArr" v-model="noiseArr"></textarea>

    </form>

    <b-table class="td" striped hover :items="provider"></b-table>
  </div>
</template>

<script>
  import {GraphData} from "@/lib/GraphData";

  console.log(GraphData);
  export default {

    data(){
      return {
        uinput: 1E-3,
        rows: 8,
        noiseArr: Math.random()+""
      }
    },  

    computed: {
      provider() {
        return new GraphData(this.uinput, 1, 1, 2, 0.1, 0.5, 0.5, 1).rows(this.rows, this.noiseArr.split("\n"));

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
