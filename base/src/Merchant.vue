<template>
  <div ref="merchant_main" class="make"></div>
</template>
<script>
export default {
  data () {
    return {
      application: null
    }
  },
  async mounted () {
    const { mount } = await import('merchant/bootstrap')
    console.log(mount)
    this.application = await mount(this.$refs.merchant_main)
  },
  beforeDestroy () {
    this.application.beforeDestroy()
  }
}
</script>

<style scoped>
</style>