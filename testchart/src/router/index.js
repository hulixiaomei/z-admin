import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestGuo from '@/components/TestGuo'
import money from '@/components/money'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/TestGuo',
      name: 'TestGuo',
      component: TestGuo

    },{
      path: '/money',
      name: 'money',
      component: money
    }
  ]
})
