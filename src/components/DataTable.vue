<template>
  <v-data-table
    dense
    :headers="headers"
    :items="rows"
    :items-per-page="-1"
    class="elevation-1"
    style="max-height: 70vh; overflow-y: auto"
  ></v-data-table>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    dataTableHeaders: Array
  },

  data: (props) => ({

    // temporary dummy data for now
    
    headers: [
      { text: props.dataTableHeaders[0], value: 'col0' },
      { text: props.dataTableHeaders[1], value: 'col1' },
      { text: props.dataTableHeaders[2], value: 'col2' }
    ],

    rows: [
      { col0: 1, col1: 2, col2: 3 },
      { col0: 4, col1: 5, col2: 6 },
      { col0: 7, col1: 8, col2: 9 },
      { col0: 10, col1: 11, col2: 12 },
      { col0: 13, col1: 14, col2: 15 },
      { col0: 16, col1: 17, col2: 18 },
      { col0: 19, col1: 20, col2: 21 },
      { col0: 22, col1: 23, col2: 24 },
      { col0: 25, col1: 26, col2: 27 },
      { col0: 1, col1: 2, col2: 3 },
      { col0: 4, col1: 5, col2: 6 },
      { col0: 7, col1: 8, col2: 9 },
      { col0: 10, col1: 11, col2: 12 },
      { col0: 13, col1: 14, col2: 15 },
      { col0: 16, col1: 17, col2: 18 },
      { col0: 19, col1: 20, col2: 21 },
      { col0: 22, col1: 23, col2: 24 },
      { col0: 25, col1: 26, col2: 27 },
      { col0: 1, col1: 2, col2: 3 },
      { col0: 4, col1: 5, col2: 6 },
      { col0: 7, col1: 8, col2: 9 },
      { col0: 10, col1: 11, col2: 12 },
      { col0: 13, col1: 14, col2: 15 },
      { col0: 16, col1: 17, col2: 18 },
      { col0: 19, col1: 20, col2: 21 },
      { col0: 22, col1: 23, col2: 24 },
      { col0: 25, col1: 26, col2: 27 },
      { col0: 1, col1: 2, col2: 3 },
      { col0: 4, col1: 5, col2: 6 },
      { col0: 7, col1: 8, col2: 9 },
      { col0: 10, col1: 11, col2: 12 },
      { col0: 13, col1: 14, col2: 15 },
      { col0: 16, col1: 17, col2: 18 },
      { col0: 19, col1: 20, col2: 21 },
      { col0: 22, col1: 23, col2: 24 },
      { col0: 25, col1: 26, col2: 27 },
      { col0: 1, col1: 2, col2: 3 },
      { col0: 4, col1: 5, col2: 6 },
      { col0: 7, col1: 8, col2: 9 },
      { col0: 10, col1: 11, col2: 12 },
      { col0: 13, col1: 14, col2: 15 },
      { col0: 16, col1: 17, col2: 18 },
      { col0: 19, col1: 20, col2: 21 },
      { col0: 22, col1: 23, col2: 24 },
      { col0: 25, col1: 26, col2: 27 }
    ]
  })
}
</script>