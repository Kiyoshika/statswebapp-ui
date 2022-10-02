import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies'
import mdiVue from 'mdi-vue/v2'
import { mdiFileChartOutline } from '@mdi/js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueCookies,
  render: function (h) { return h(App) }
}).$mount('#app')
