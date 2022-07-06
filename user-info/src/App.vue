<template>
  <div id="app">
    <h1>this is merchant App</h1>
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
