import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/containner/Home'
import About from '@/containner/About'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'about',
            component:About
        },
        {
            path:'/home',
            name:'home',
            component:Home,
            children: [
                {
                  path: '/home/home1',
                  component: resolve => require(['@/components/home1'], resolve),
                },
                {
                  path: '/home/home2',
                  component: resolve => require(['@/components/home2'], resolve),
                },
                {
                  path: '/home/home3',
                  component: resolve => require(['@/components/home3'], resolve),
                },
              ]
        },
        {
            path:'*',
            component:Home   
        }

    ]
})