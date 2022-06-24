const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: '**/*.{feature,features}',
    pageLoadTimeout: 120000,
    reporter: "junit",
    reporterOptions: {
        mochaFile: "results/test_report_[hash].xml",
        toConsole: true
    }
  }
})