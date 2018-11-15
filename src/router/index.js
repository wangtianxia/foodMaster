import Vue from "vue";
import Router from "vue-router";
import userManageList from "@/components/userManageList.vue";
import bedRequest from "@/page/404.vue";
import content from '@/page/content'
import login from '@/page/login'
import createUrl from '@/components/createUrl'
Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    // {
    //   path:'/',
    //   redirect:'/content'
    // },
    // {
    //   path: '/content',
    //   name: 'content',
    //   component: content,
    //   children:[
    //         {
    //           path:'userManageList',
    //           name: 'userManageList',
    //           component: userManageList,
    //         },
    //
    //         {
    //           path:'createUrl',
    //           name: 'createUrl',
    //           component: createUrl,
    //         }
    //     ]
    // },

    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/content',
      name: 'content',
      component: content,
      children:[
        {
          path:'userManageList',
          name: 'userManageList',
          component: userManageList,

        },
        {
           path:'createUrl',
           name: 'createUrl',
           component: createUrl,
        }

      ]
    },
    {
      path: '/bedRequest',
      name: 'bedRequest',
      component: bedRequest,
    }
  ]
})
