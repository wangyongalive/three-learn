<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
    },
    methods: {
      toProcess() {
        this.$router.push({path: '/process'});
      },
      toModel() {
        this.$router.push({path: '/model'});
      }
    }
  }
</script>

<style lang="less">
  #app {
  }
</style>
