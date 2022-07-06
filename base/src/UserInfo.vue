<template>
  <div>
    <Home />
    <!-- Hello Home user info -->
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log(to, "hello beforeRouteEnter")
    
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(to, "hello beforeRouteUpdate")
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(to, "hello beforeRouteLeave")
    next()
  },
  beforeMount () {
    console.log("beforeMount user info")
  },
  mounted () {
    console.log("mounted user info")
  },
  destroyed(){
    console.log("destroyed user info")
  },
  components: {
    Home: () => import('user_info/Home')
  },
}
</script>

<style scoped>
.app {
  height: 100vh;
}
.el-header,
.el-footer,
.el-header,
.el-menu {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-menu {
  color: black;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>