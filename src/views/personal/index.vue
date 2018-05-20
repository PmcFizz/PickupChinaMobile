<template>
  <div class="personal_container">
    <group class="top_profile_info">
     <x-header title="个人中心" :left-options="{showBack: false}" class="top_title"></x-header>
    </group>
    <group>
      <cell title="发起活动" value="" class="cell_item" :border-intent="false" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="http://iph.href.lu/100x100">
      </cell>
      <cell title="我的活动" value="" class="cell_item" :border-intent="false" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="http://iph.href.lu/100x100">
      </cell>
      <cell title="标注垃圾" value="" class="cell_item cell_item_mrzero" :border-intent="false" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="http://iph.href.lu/100x100">
      </cell>
      <cell title="垃圾管理" value="" class="cell_item" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="http://iph.href.lu/100x100">
      </cell>
      <cell title="我的辖区" value="" class="cell_item" :border-intent="false" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="http://iph.href.lu/100x100">
      </cell>
    </group>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'login',
  data () {
    return {

    }
  },
  mounted: function () {
    // 获取验证码
  },
  methods: {
  },
  created () {
        // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed () {
        // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>

<style lang="less" scoped>
.personal_container{
  background-color:#f7f7f7;
  /deep/ .weui-cells{
    background-color: transparent;
    margin-top:0;
    &:before,&:after{
      display:none;
    }
  }
  .top_profile_info{
    .top_title{
      /deep/ .vux-header-title{
        height:96px;
        line-height:96px;
        font-size:36px;
        color:#fff;
      }
    }

  }
  .cell_item{
    height:96px;
    line-height:96px;
    margin-bottom:20px;
    background-color:#fff;
    &:before,&:after{
      display:none;
    }
  }
}
</style>
