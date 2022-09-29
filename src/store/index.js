import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataSetNames: [
      'sample_one.csv',
      'sample_two.csv'
    ]
  },
  getters: {
  },
  mutations: {
    addDataSet(state, payload) {
      state.dataSetNames.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
