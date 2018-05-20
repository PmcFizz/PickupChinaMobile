import { login, logout, getUserInfo } from '@/api/user/login'
import { setToken, removeToken } from '@/util/auth'

const user = {
  state: {
    permissionUrls: [], //  权限URL
    token: ''
  },

  mutations: {
    SET_PERMISSIONURLS: (state, permissionUrls) => {
      state.permissionUrls = permissionUrls
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 账号密码登录
    LoginByUsername ({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        login(loginInfo).then(response => {
          const token = response.data.data
          setToken(token)
          commit('SET_TOKEN', token)
          console.log('设置token' + token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_PERMISSIONURLS', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_PERMISSIONURLS', [])
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRole ({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.role)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    }
  }
}

export default user
