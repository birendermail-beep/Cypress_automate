const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'gq3eir',
  pageLoadTimeout: 300000,
  defaultCommandTimeout: 15000,
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  video: false,
  numTestsKeptInMemory: 20,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://www.ucertify.com',
    // Keep the legacy suite in place while uCertify flows are repaired incrementally.
    specPattern: 'cypress/integration/**/*.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents(on, config) {
      return config
    },
  },
})
