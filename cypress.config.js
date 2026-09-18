const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		specPattern: 'cypress/integration/**/*.js',
		supportFile: 'cypress/support/index.js',
		setupNodeEvents(on, config) {
			return config
		},
	},
	chromeWebSecurity: false,
	defaultCommandTimeout: 10000,
	numTestsKeptInMemory: 50,
	pageLoadTimeout: 300000,
	projectId: 'gq3eir',
	video: false,
	viewportWidth: 1024,
})
