const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'gq3eir',
  pageLoadTimeout: 300000,
  defaultCommandTimeout: 15000,
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  // Rewrite frame-busting and top-window navigation used by legacy course
  // pages so they remain inside Cypress's controlled AUT iframe.
  modifyObstructiveCode: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  video: false,
  numTestsKeptInMemory: 20,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  env: {
    login_username: process.env.CYPRESS_USERNAME || '',
    login_password: process.env.CYPRESS_PASSWORD || '',
  },
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://www.jigyaasa.info',
    // Keep the legacy suite in place while Jigyaasa flows are repaired incrementally.
    specPattern: 'cypress/integration/**/*.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents(on, config) {
      return config
    },
  },
})
