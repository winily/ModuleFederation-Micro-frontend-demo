import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
Vue.use(ElementUI);
import VueRouter from "vue-router";

// import MerchantRouter from "merchant/router";
// import UserInfoRouter from "user_info/userRouter";

const routes = [
  { path: "/", component: () => import('./App.vue') },
  { path: "/merchant", component: () => import('./Merchant.vue') },
  { path: "/merchant/*", component: () => import('./Merchant.vue') },
  {
    path: "/user-info",
    meta: {
      keepAlive: false
    },
    component: () => import('./UserInfo.vue'),
    afterEach (to, from) {
      console.log("user-info", to, from)
    }
  },
  // ...MerchantRouter,
  // ...UserInfoRouter
]
console.log("routes", routes)

const router = new VueRouter({
  mode: "hash",
  routes, // `routes: routes` 的缩写
})

router.afterEach((to, from) => {
  console.log(to, from, "user-info afterEach")
})

Vue.use(VueRouter)
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
