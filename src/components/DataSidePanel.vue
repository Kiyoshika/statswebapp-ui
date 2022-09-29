<template>
  <v-card>
    <v-navigation-drawer
      permanent
      expand-on-hover
      color="purple darken-4"
      style="min-height: 90vh"
      width="330"
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon style="color: white">mdi-menu</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-h6" style="color: #F3E5F5">
              Imported Data
            </v-list-item-title>
            <v-list-item-subtitle style="color: #F3e5F5">
              Use Data > Import CSV to add files.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item
          style="background: #F3E5F5" 
          link
          v-for="(dataSet, index) in dataSetNames" :key="dataSet"
        >
          <v-list-item-icon>
            <v-icon>mdi-file-chart-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title style="color: #4A148C">{{ dataSet }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import store from '../store';

export default {
  name: 'DataSidePanel',
  
  data: () => ({
    dataSetNames: store.state.dataSetNames
  }),

  methods: {
    addDataSet(dataSetName) {
      this.dataSetNames.push(dataSetName);
    }
  }
}
</script>
