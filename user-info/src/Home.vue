<template>
  <el-container>
    <el-main>
      <el-descriptions
        style="line-height: 20px;"
        title="User Info"
        direction="vertical"
        :column="4"
        border
      >
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <micro-tag size="small">学校</micro-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </el-descriptions>
    </el-main>
  </el-container>
</template>
<script>
export default {
  components: {
    MicroTag: () => import('components/micro-tag')
  }
}
</script>

<style scoped>
</style>