import VueRouter from 'vue-router'

const routes = [
  { name: 'home', path: '/', component: () => import('./Home.vue') },
]

export default (basePath) => {
  return new VueRouter({
    mode: "hash",
    // mode: "history",
    // base: basePath,
    routes: routes.map(item => {
      // console.log(item, item.path, "routes")
      // item.path = basePath + item.path;
      // console.log(item, item.path, "routes")
      return item
    })
  })
}