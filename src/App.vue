<template>
  <div id="app" ref="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    let self = this
    this.$nextTick(()=>{
      self.$refs.app.style.height = window.outerHeight+'px'
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './less/vux_ui/index.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
</style>
