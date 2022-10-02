import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientIP: '',
    userSessionID: '',
    serverURL: 'http://localhost:5000/api/v1/',

    dataSetNames: [
      'sample_one.csv',
      'sample_two.csv'
    ],

    dashboardTabNames: [
      'Sample Data One',
      'Sample Data Two'
    ],

    dashbaordTabTypes: [
      'dataset',
      'dataset'
    ]
  },
  getters: {
  },
  mutations: {
    setSessionID(state, payload) {
      state.userSessionID = payload;
    },

    setClientIP(state, payload) {
      state.clientIP = payload;
    },

    addDataSet(state, payload) {
      state.dataSetNames.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
