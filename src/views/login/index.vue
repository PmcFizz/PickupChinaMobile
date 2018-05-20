<template>
  <div class="login_container">
    <group class="login_box">
      <x-input title="手机号" name="mobile" placeholder="" keyboard="number" class="input_box" type="number"></x-input>
      <x-input title="验证码" class="input_box" focus>
        <x-button slot="right" type="" class="button_text" mini>获取验证码</x-button>
      </x-input>
      <x-button type="default" link="BACK" class="login_button disabled">登录</x-button>
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
    focusStyle (e) {
      let dom = e.target
      dom.className += ' focusedInput'
    },
    blurStyle (e) {
      let dom = e.target
      let targetIndex = dom.className.indexOf('focusedInput')
      dom.className = dom.className.slice(0, targetIndex - 1)
    },
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin () {
      let _this = this
      let username = _this.loginForm.username
      let password = _this.loginForm.password
      if (!isValidUsername(username)) {
        _this.$message({
          type: 'error',
          message: '请输入正确的员工号'
        })
        return false
      }
      if (password.length < 6) {
        _this.$message({
          type: 'error',
          message: '请输入6位以上密码'
        })
        return false
      }
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(response => {
            getUserInfo().then(response => {
              const data = response.data.data
              const userInfo = {
                employeeName: data.employName,
                account: data.account,
                companyList: data.companyList,
                currentCompany: data.currentCompany,
                permissionUrls: data.permissionUrls,
                avatar: data.headPortrait
              }
              setLocalStorage('userInfo', userInfo)
              this.loading = false
              this.$router.push({ path: '/trademark/case' })
            }).catch(error => {
              console.log(error)
            })
          }, (error) => {
            console.log(error)
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
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
.login_container{
  padding-top:592px;
  height:100%;
  background:url('../../assets/images/loginBg.jpg') no-repeat;
  background-size: 100%;
  .login_box{
    width:630px;
    margin:0 auto;
    /deep/ .weui-cells{
      margin-top:0;
      background-color:transparent;
      &:before,&:after{
        display:none;
      }
    }
    .input_box{
      font-size:32px;
      height:82px;
      line-height:82px;
      border-radius:41px;
      background-color:#fff;
      padding:0 38px 0 38px;
      &:before{
        display:none;
      }
      margin-bottom:18px;
    }
    .login_button{
      font-size:32px;
      height:82px;
      line-height:82px;
      border-radius:41px;
      background-color:#fff;
      color:#3370f7;
      margin-top:34px;
      &.disabled{
        color:#999;
      }
    }
  }
  .button_text{
    position:relative;
    color:#4b84ef;
    background-color:transparent;
    padding-right:0;
    &:after{
      display:none;
    }
    &:before{
      content:'';
      width:2px;
      height:32px;
      background-color:#4b84ef;
      position:absolute;
      top:50%;
      margin-top:-16px;
      left:20px;
    }
  }
}
</style>
