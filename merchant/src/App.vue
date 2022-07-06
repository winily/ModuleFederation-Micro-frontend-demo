<template>
  <div id="merchant-app">
    <router-view />
  </div>
</template>
<script>
export default {
  components: {
  },
  methods: {
    buttonReactClick () {
      console.log("buttonReactClick by vue")
    }
  }
}

</script>
