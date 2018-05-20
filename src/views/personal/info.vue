<template>
  <div class="personal_container">
    <section ref="personal_panel">
      <group class="top_profile_info">
       <x-header :left-options="{backText: ''}">个人信息</x-header>
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
    </section>
    <section class="contact_info" ref="contactInfo">
        <p>请添加捡拾中国官方交流微信，并及时沟通进展<br>
        <span>微信号：jszg001 (捡小弟)</span></p>
    </section>
  </div>
</template>

<i18n>
Switch the type:
  zh-CN: 切换样式
List of content with image:
  zh-CN: 图文组合列表
More:
  zh-CN: 查看更多
</i18n>

<script>
export default {
  components: {
  },
  name: 'login',
  data () {
    return {
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '昵称',
        desc: '13570000000',
      }]
    }
  },
  mounted: function () {
    // 获取宣传信息栏目的高度
    this.$nextTick(()=>{
      let personalHeight = this.$refs.personal_panel.clientHeight
      let bottomBarHeight = document.querySelector('.buttom_bar').clientHeight
      let backAdHeight = window.outerHeight - personalHeight - bottomBarHeight
      this.$refs.contactInfo.style.height = backAdHeight + 'px'
    })
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
  font-size:30px;
  background-color:#f7f7f7;
  .top_profile_info{
    background:url('../../assets/images/personalBg.png') no-repeat;
    background-size:100%;
  }
  .user_info{
    height:160px;
    padding:0 40px;
    color:#fff;
    box-sizing:border-box;
    &:before{
      display:none;
    }
    /deep/ .weui-cell_access.vux-cell-box:after{
      color:#fff;
    }
    /deep/ a.weui-media-box{
      color:#fff;
      .weui-media-box__hd{
        width:112px;height:112px;border-radius:50%;overflow:hidden;
      }
    }
    /deep/  .weui-panel{
      background-color: transparent;
      &:before,&:after{
        display:none;
      }
    }
    /deep/ .weui-media-box__title{
      font-size:30px;
    }
    /deep/ .weui-media-box__desc{
      color:#fff;
      font-size:26px;
    }
  }
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
        padding:0;
        font-size:36px;
        color:#fff;
      }
    }

  }
  .cell_item{
    font-size:30px;
    height:96px;
    line-height:96px;
    margin-bottom:20px;
    background-color:#fff;
    &:before,&:after{
      display:none;
    }
    &.cell_item_mrzero{
      margin-bottom:0;
      &+.cell_item:before{
        display:block;
      }
    }
  }
  .contact_info{
    width:100%;
    display:table;
    p{
      width:100%;
      display:table-cell;
      vertical-align: middle;
      text-align:center;
      color:#b7b7b7;
      span{
        color:#496ec2;
      }
    }
  }
}
</style>
