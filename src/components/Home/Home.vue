<template>
  <div id="home">
    <div @click="toProcess">后期处理</div>
    <div @click="toModel">港航模型</div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
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
  #home {
    margin-top: 100px;
    display: flex;
    justify-content: center;

    div {
      margin-left: 20px;
      font-size: 20px;
      color: black;
      border: 1px solid;
      border-radius: 2px;
    }
  }
</style>
