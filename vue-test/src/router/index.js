import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import comptentA from '../components/comptentA'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/b',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/c',
      name: 'comptentA',
      component: comptentA
    }
  ]
})
