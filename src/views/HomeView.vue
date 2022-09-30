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
import TabPanel from '../components/TabPanel.vue';

  export default {
    name: 'Home',

    components: {
      DataSidePanel,
      NavigationBar,
        TabPanel
    },
  }
</script>
