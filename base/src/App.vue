<template>
  <el-container class="app">
    <el-header>
      <el-menu @select="handleSelect" :default-active="basemenu" mode="horizontal" :router="false">
        <el-menu-item index="/user-info">UserInfo</el-menu-item>
        <el-menu-item index="/merchant">Marchant</el-menu-item>
        <el-menu-item index="/">
          <micro-tag type="success">Test component</micro-tag>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view v-if="routerAlive" :key="$route.fullPath"></router-view>
    </el-main>
  </el-container>
</template>
<script>
export default {
  components: {
    MicroTag: () => import('components/micro-tag')
  },
  data () {
    return {
      basemenu: 'user-info',
      routerAlive: true
    };
  },
  methods: {
    handleSelect (index) {
      this.$router.push(index)
      this.routerAlive = false;
      this.$nextTick(() => {
        this.routerAlive = true;
      });
    }
  }
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