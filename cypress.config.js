const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7j62w3',
  e2e: {
    watchForFileChanges: false,
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
