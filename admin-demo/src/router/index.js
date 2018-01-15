import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'
import Users from '../components/users/list'

import TestCollapse from '../components/test/collapse'
import TestLayout from '../components/test/layout'
import TestTransition from '../components/test/transition'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '系统管理',
      component: Home,
      icon:'el-icon-setting',
      children:[
        {
          path:'/users',
          name:'用户',
          component:Users,

        },{
          path:'/roles',
          name:'角色',

        },{
          path:'/permissions',
          name:'权限',

        },
      ]
    },
     {
      path: '/',
      name: '管理',
      component: Home,
      icon:'el-icon-menu',
      children:[
        {
          path:'/desktype',
          name:'类型',
        },{
          path:'/deskrange',
          name:'区域',

        }
      ]
    },
    {
      path:'/',
      name:'测试页面',
      component:Home,
      icon:'el-icon-message',
      children:[
        {
          path:'/testcollapse',
          name:'TestCollapse',
          component:TestCollapse
        },
        {
          path:'/testlayout',
          name:'TestLayout',
          component:TestLayout
        },
        {
          path:'/testtransition',
          name:'TestTransition',
          component:TestTransition
          
        }
      ]
    }
  ]
})
