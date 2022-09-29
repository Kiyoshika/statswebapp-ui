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
          <data-side-panel></data-side-panel>
      </v-row>
    </v-container>
</template>

<script>
  import DataSidePanel from '../components/DataSidePanel.vue';
  import NavigationBar from '../components/NavigationBar.vue';

  export default {
    name: 'Home',

    components: {
      DataSidePanel,
      NavigationBar
    },
  }
</script>
