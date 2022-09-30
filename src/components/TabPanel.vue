<template>
  <v-card>
    <v-toolbar
      color="purple darken-4"
      dark
      flat
    >

      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="#F3E5F5"></v-tabs-slider>

          <v-tab
            v-for="tabName in tabNames"
            :key="tabName"
          >
            {{ tabName }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(tabName, index) in tabNames"
        :key="tabName"
      >
        <v-card flat>
          <data-table v-if="tabTypes[index] === 'dataset'" :dataTableHeaders="sampleTableHeaders[index]"></data-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import store from '../store'
import DataTable from './DataTable.vue'

export default {
	components: { DataTable },
  name: 'TabPanel',
  data: () => ({
    tab: null,
    tabNames: store.state.dashboardTabNames,
    tabTypes: store.state.dashbaordTabTypes,
    // dummy headers just for sample data
    sampleTableHeaders: [
      ['apples', 'bananas', 'oranges'],
      ['chickens', 'cows', 'grass']
    ]
  })
}
</script>