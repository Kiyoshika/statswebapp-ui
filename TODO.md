# TODO Checklist
My general TODO items in no particular order:
* Make dataset panel scrollable
* Add limit to 10 datasets per client
* Check filenames are alphanumeric only (with the exception of period for '.csv')
* Send csv file to server
  * Format the file headers and rows according to Vuetify's data table format and write it into a file `[session-id]-filename.csv`. This will be beneficial if user clicks 'View Data' many times, we won't have to reconstruct the JSON each time as it's constructed once at upload time.
* Use Vuex store for color codes instead of hardcoding them everywhere. This will make it much easier to scale & manage future components (especially in cases of overhauls)
