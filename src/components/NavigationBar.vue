<template>
<div>
    <!-- FILE DIALOG WHEN USER CLICKS 'Import CSV' -->
    <input type="file" ref="file" style="display: none" v-on:change="uploadDataset()">

    <v-app-bar
        app
        color="purple darken-4"
        dark
    >
        <v-menu offset-y>
        <template v-slot:activator="{on, attrs}">
            <v-btn
            style="color: #4A148C"
            color="#F3E5F5"
            light
            v-bind="attrs"
            v-on="on"
        >Data
        </v-btn>
        </template>
        <v-list>
            <v-list-item
            v-for="(item, index) in dataDropdownItems"
            :key="index"
            @click="dataMenuEvent(index)"
            >
            <v-list-item-title style="color: #4A148C">{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>
    </v-app-bar>
</div>
</template>

<script>
import store from '../store'

export default {
  name: 'NavigationBar',
  data: () => ({

    dataDropdownItems: [
        {
            title: 'Import CSV', click() {
                this.$refs.file.click(); // open file dialog
            }
        }
    ]
  }),

  methods: {
    dataMenuEvent(index) {
      this.dataDropdownItems[index].click.call(this);
    },

    // expecting .csv only
    isValidFileName(fileName) {
        if (fileName.length - fileName.lastIndexOf('.csv') === 4)
            return true;
        return false;
    },

    // check if file already exists, avoid uploading duplicate files to server
    isDuplicateFile(fileName) {
        const getFile = store.state.dataSetNames.filter(name => name === fileName);
        return getFile.length > 0;
    },

    uploadDataset() {
        
      const fileName = this.$refs.file.files[0].name;

      if (!this.isValidFileName(fileName))
        alert("Please only upload '.csv' files!");
      else if (this.isDuplicateFile(fileName))
        alert("File already exists! Please remove it first before reuploading.");
      else {
        alert("TODO: upload this file to server");
        store.commit("addDataSet", fileName);
      }
    }
  }
}
</script>