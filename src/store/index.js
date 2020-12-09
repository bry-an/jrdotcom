import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeState: 0,
    freshInstance: true,
  },
  getters: {
    homeState: (state) => state.homeState,
    freshInstance: (state) => state.freshInstance,
  },
  mutations: {
   INCREMENT_HOME_STATE(state) {
     state.homeState += 1
   },
   DECREMENT_HOME_STATE(state) {
     state.homeState -= 1
   },
   SET_HOME_STATE(state, val) {
     state.homeState = val
   },
   SET_FRESH_INSTANCE(state, val) {
     state.freshInstance = val
   },
  },
  actions: {
  },
  modules: {
  }
})
