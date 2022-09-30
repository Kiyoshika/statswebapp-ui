# TODO Checklist
My general TODO items in no particular order:
* Make dataset panel scrollable
* Send file to server
  * Format the file headers and rows according to Vuetify's data table format and write it into a file `[session-id]-filename.csv`. This will be beneficial if user clicks 'View Data' many times, we won't have to reconstruct the JSON each time as it's constructed once at upload time.
* Create session ID when user opens application (will need server for this)
* Use Vuex store for color codes instead of hardcoding them everywhere. This will make it much easier to scale & manage future components (especially in cases of overhauls)
* Validate filenames are pure ASCII at upload time