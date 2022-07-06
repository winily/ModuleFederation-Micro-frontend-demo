import Vue from "vue"
import ElementUI from 'element-ui'
import VueRouter from "vue-router";

const mount = async (el) => {
  await import('element-ui/lib/theme-chalk/index.css')
  const { default: App } = await import("./App.vue")
  const { default: routes } = await import('./router')
  if (el instanceof Vue) el = el.$el

  Vue.use(ElementUI);
  const app = new Vue({
    el: el,
    router: new VueRouter({ routes }),
    render: h => h(App)
  })

  return {
    beforeDestroy: () => {
      console.log(app.$el)
      app.$el.remove()
    }
  }
}

export { mount }