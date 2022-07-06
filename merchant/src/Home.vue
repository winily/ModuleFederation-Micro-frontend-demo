<template>
  <el-container id="merchant" style="flex: 1">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router default-active="/merchant/info">
        <el-menu-item index="/merchant/info">Info</el-menu-item>
        <el-menu-item index="/merchant/goods">Goods</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-main>
        <router-view class="merchant" />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: true
    };
  },
  mounted () {
    console.log('hello home')
  },
  destroyed () {
    // const merchant_main = this.$refs.merchant_main.$el
    // merchant_main.remove()
    console.log("destroyed Home")
  }
}
</script>
