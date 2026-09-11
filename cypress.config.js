const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'gq3eir',
  pageLoadTimeout: 300000,
  viewportWidth: 1024,
  viewportHeight: 768,
  chromeWebSecurity: false,
  video: false,
  numTestsKeptInMemory: 20,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    // Keep the legacy suite runnable while individual uCertify flows are modernized.
    specPattern: 'cypress/integration/**/*.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents(on, config) {
      return config
    },
  },
})
