<template>
  <v-container class="ma-0" fluid style = "height: 100vh">
      <!-- TOP NAVIGATION BAR CONTAINING BUTTONS -->
      <v-row>
        <v-col>
          <navigation-bar></navigation-bar>
        </v-col>
      </v-row>

      <!-- LEFT SIDE PANEL CONTAINING IMPORTED DATASETS -->
      <v-row no-gutters fill-height>
        <v-col cols="3" style="max-height: 80vh">
          <data-side-panel></data-side-panel>
        </v-col>

        <v-col cols="9" style="max-height: 80vh">
          <tab-panel></tab-panel>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import DataSidePanel from '../components/DataSidePanel.vue';
  import NavigationBar from '../components/NavigationBar.vue';
  import VueCookies from 'vue-cookies';
  import TabPanel from '../components/TabPanel.vue';
  import store from '../store';

  export default {
    name: 'Home',

    async created() {
      await fetch("https://api.ipify.org?format=json").then(response => response.json()).then(data => {
        store.commit("setClientIP", data.ip);
      });

      // if session hasn't been created already, create new session ID
      if (store.state.userSessionID === '') {
        let cookieSession = $cookies.get("userSessionID");
        // if session still exists in user's cookies we can fetch the ID from there
        if (cookieSession !== null && cookieSession !== '') {
          store.commit("setSessionID", cookieSession);
        } else {
          let fetchURL = store.state.serverURL + 'Session/GetNewSessionID';
          await fetch(fetchURL, {headers: {'client-ip': store.state.clientIP}})
          .then(response => response.json())
          .then(data => {
            console.log(data);
            $cookies.set("userSessionID", data, 0); // 0 indicates cookie is held until end of session
            store.commit("setSessionID", data);
          });
        }
      }
    },

    components: {
      DataSidePanel,
      NavigationBar,
      TabPanel
    },
  }
</script>
