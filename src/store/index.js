import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import projectCase from './modules/projectCase'
import permission from './modules/permission'
import createLogger from './plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    projectCase
  },
  getters: {
    sidebar: state => state.app.sidebar,
    visitedViews: state => state.app.visitedViews,
    token: state => state.user.token,
    permissionUrls: state => state.user.permissionUrls,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    setProjectCaseId: state => state.projectCase.setProjectCaseId,
    setProjectCustId: state => state.projectCase.setProjectCustId,
    setDetailOnlyReady: state => state.projectCase.setDetailOnlyReady
  },
  plugins: debug ? [createLogger()] : []
})

export default store
