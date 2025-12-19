const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
          reportDir: 'cypress/reports',
          overwrite: false,
          html: true,
          json: true,
          charts: true,
          reportPageTitle: 'Cypress Automation Report',
          embeddedScreenshots: true,
          inlineAssets: true
        },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://automationexercise.com/",
    supportFile: "cypress/support/e2e.js",
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  },
});
