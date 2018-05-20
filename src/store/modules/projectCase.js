/***
 * 项目案件组件状态状态 参数管理
 *pmc
 * 2018年1月30日17:21:13
 */
const projetCase = {
  state: {
    projectCaseId: '', // 项目案件id
    projectCustId: '', // 项目客户id
    detailOnlyReady: false // 详情页是否只读
  },
  mutations: {
    // 设置项目案件参数
    SETPROJECTCASEID: (state, projectCaseId) => {
      state.projectCaseId = projectCaseId
    },
    SETPROJECTCUSTID: (state, custId) => {
      state.projectCustId = custId
    },
    SETDETAILONLYREADY: (state, detailOnlyReady) => {
      state.detailOnlyReady = detailOnlyReady
    }
  },
  actions: {
    setProjectCaseId ({commit}, projectCaseId) {
      commit('SETPROJECTCASEID', projectCaseId)
    },
    setProjectCustId ({commit}, custId) {
      commit('SETPROJECTCUSTID', custId)
    },
    setDetailOnlyReady ({commit}, detailOnlyReady) {
      commit('SETDETAILONLYREADY', detailOnlyReady)
    }
  }
}

export default projetCase
