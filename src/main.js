// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false;


import './style/reset.css';
// import './config/rem.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

/*面包屑用法*/
// var routeList = [];
// router.beforeEach((to, from, next) => {
//   var index = -1;
//   for(var i = 0; i < routeList.length; i++) {
//     if(routeList[i].name == to.name) {
//       index = i;
//       break;
//     }
//   }
//   if (index !== -1) {
// //如果存在路由列表，则把之后的路由都删掉
//     routeList.splice(index + 1, routeList.length - index - 1);
//   } else if(to.name != '登录'){
//     routeList.push({"name":to.name,"path":to.fullPath});
//   }
//   to.meta.routeList = routeList;
//   next()
// });
