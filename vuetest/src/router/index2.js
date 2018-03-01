import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' 
import index from '@/components/index' 
import Count from '@/components/Count' 
import mbMode from '@/components/mbMode' 
import rorack from '@/components/rorack' 
import rack from '@/components/rack' 
import hi1 from '@/components/hi1' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      //多个子级引入要用 components
      component: HelloWorld
    },
    {
    	path:"/index",
    	name:"index",
    	component:index
    },
    {
      path:"/count",
      component:Count
    },
    {
      path:"/mbMode/:id",
      name:'mbMode',
      component:mbMode
    },
    {
      path:"/rorack",
      name:'rorack',
      component:rorack
    },
    {
      path:"/rack",
      name:'rack',
      component:rack
    }
  ]
})
