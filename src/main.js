// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局注册VuxUI的组件（听说vux3版本后支持无声明注册）
import { Group,Cell,CellBox,XInput,XButton,Flexbox, FlexboxItem,Tabbar, TabbarItem,XHeader,Panel  } from 'vux'
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('cell-box', CellBox)
Vue.component('x-header', XHeader)
Vue.component('panel', Panel)
// 引入适配
import 'lib-flexible'
// 点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
