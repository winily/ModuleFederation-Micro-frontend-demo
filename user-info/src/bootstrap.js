import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import setupRouter from './router'
Vue.use(ElementUI)

function mount (el, { isMemoryHistory, basePath, currentPath, onNavigate, sharedData = {} }) {
  const app = createApp(App, { basePath, currentPath, isMemoryHistory, onNavigate, sharedData })
  const history = isMemoryHistory ? createMemoryHistory(basePath) : createWebHistory()
  setupRouter(app, { history })
  app.use(ElementUI);
  app.mount(el)
  return {
    onParentNavigate ({ pathname: nextPathname }) {
      console.log('dashboard vue onParentNavigate', nextPathname)
      history.listen((currentPath) => {
        if (currentPath !== nextPathname) {
          history.push(nextPathname)
        }
      })
    },
  }
}

export { mount }