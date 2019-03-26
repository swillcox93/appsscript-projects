import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Chart from '@/components/Chart'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/chart',
    name: 'Chart',
    component: Chart
  }]
})
