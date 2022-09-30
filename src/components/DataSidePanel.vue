<template>
  <v-card flat>
    <v-navigation-drawer
      permanent
      floating
      color="purple darken-4"
      style="min-height: 85vh; max-height: 85vh"
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
            <v-list-item-subtitle style="color: #F3E5F5">
              Use Data > Import CSV to add files.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider style="background: #F3E5F5"></v-divider>

      <v-list
        nav
        dense
      >

            <v-list-item
              style="background: #F3E5F5" 
              link
              v-for="(dataSet, index) in dataSetNames" :key="dataSet"
            >
            <v-menu offset-x transition="slide-x-transition">
                <template v-slot:activator="{on, attrs}">
              <v-list-item-icon>
                <v-icon>mdi-file-chart-outline</v-icon>
              </v-list-item-icon>
              
                  <v-list-item-title v-bind="attrs" v-on="on" style="color: #4A148C">{{ dataSet }}</v-list-item-title>
                </template>
                <!-- CONTEXT MENU ITEMS WHEN USER CLICKS DATASET BUTTON -->
                <v-list>
                  <v-list-item @click="viewData(dataSet)">
                    <v-list-item-title style="color: #149dff">View Data</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="renameData(dataSet)">
                    <v-list-item-title style="color: #ff9d14">Rename Data</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="deleteData(dataSet)">
                    <v-list-item-title style="color: #ff1814">Delete Data</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
    },

    viewData(selectedDataSet) {
      console.log(selectedDataSet);
    },

    renameData(selectedDataSet) {
      console.log(selectedDataSet);
    },

    deleteData(selectedDataSet) {
      console.log(selectedDataSet);
    }
  }
}
</script>
