<!--底部bar-->
<template>
  <tabbar class="buttom_bar">
    <tabbar-item>
      <img slot="icon" src="">
      <span slot="label">捡拾活动</span>
    </tabbar-item>
    <tabbar-item show-dot>
      <img slot="icon" src="">
      <span slot="label">垃圾地图</span>
    </tabbar-item>
    <tabbar-item selected link="/component/demo">
      <img slot="icon" src="">
      <span slot="label">个人中心</span>
    </tabbar-item>
  </tabbar>
</template>
<script>
  export default {
    components: {},
    name: 'Bottombar',
    data () {
      return {
      }
    },
    mounted () {

    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  .buttom_bar{
    height:98px;
    background-color:#fff;
  }
</style>



