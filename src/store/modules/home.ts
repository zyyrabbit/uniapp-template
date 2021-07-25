
import * as types from '../mutation-types'

const state = {
  userInfo: {}
}

const mutations = {
  [types.SET_USER_INFO](state: any, userInfo: object) {
    state.userInfo = userInfo
  },
};


const actions = {
  setSetting({ commit }: any, data: object) {
    commit(types.SET_USER_INFO, data);
  },
};


const getters = {
  userInfo: (state: any) => state.userInfo
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}