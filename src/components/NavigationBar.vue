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

    // make sure filename ends in .csv
    isValidFileName(fileName) {
      if (fileName.length - fileName.lastIndexOf('.csv') === 4)
        return true;
      return false;
    },

    // check if file name only contains ASCII characters (required)
    isOnlyASCII(fileName) {
      if (/^[\u0000-\u007f]*$/.test(fileName)) // regex to check for ASCII
        return true
      return false;
    },

    // check that filename (besides extension) is alphanumeric
    // this validation is done *after* checking that only ascii characters are present
    isAlphaNumeric(fileName) {
      console.log(fileName);
      let truncatedFileName = fileName.substring(0, fileName.indexOf('.csv'));
      if (truncatedFileName.length === 0) return false; /* must have non-empty filename */
      // check if each character falls outside ASCII range for alpha/numeric characters
      for (let i = 0; i < truncatedFileName.length; i++) {
        let charCode = truncatedFileName.charCodeAt(i);
        if (!(charCode > 47 && charCode < 58) && // 0-9
            !(charCode > 64 && charCode < 91) && // a-z
            !(charCode > 96 && charCode < 123)) { // A-Z
              return false;
            }
      }
      return true;
    },

    // check if file already exists, avoid uploading duplicate files to server
    isDuplicateFile(fileName) {
        const getFile = store.state.dataSetNames.filter(name => name === fileName);
        return getFile.length > 0;
    },

    // check that file is <= 1MB (1000 * 1000 bytes)
    isValidSize(fileSize) {
      if (fileSize > 1000 * 1000)
        return false;
      return true;
    },

    async uploadDataset() {
        
      const csvFile = this.$refs.file.files[0];

      if (!this.isValidFileName(csvFile.name))
        alert("Please only upload '.csv' files!");
      else if (!this.isOnlyASCII(csvFile.name))
        alert("File name must only contain ASCII characters!");
      else if (!this.isAlphaNumeric(csvFile.name))
        alert("File name must only contain alphanumeric characters (besides file extension) and be non-empty.");
      else if (this.isDuplicateFile(csvFile.name))
        alert("File already exists! Please remove it first before reuploading.");
      else if (!this.isValidSize(csvFile.size))
        alert("File must be <= 1MB in size!");
      else {
        let serverURL = store.state.serverURL + 'DataUpload/UploadDataset';
        const formData = new FormData();
        formData.append('file', csvFile);
        await fetch(serverURL, {
          method: 'POST',
          headers: {
            'filename': csvFile.name,
            'client-ip': store.state.clientIP,
            'session-id': store.state.userSessionID
          },
          body: formData
        }).then(response => response.json())
        .then(data => console.log(data));
        console.log(csvFile);
        store.commit("addDataSet", csvFile.name);
      }
    }
  }
}
</script>