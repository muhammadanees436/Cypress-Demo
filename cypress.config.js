const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // Specify the reporter
  reporterOptions: {
    reportDir: "cypress/reports",        // Directory to save reports
    overwrite: false,                   // Do not overwrite previous reports
    charts: true,                       // Enable charts in the report
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,          // Embed screenshots in the report
    inlineAssets: true,                 // Inline CSS/JS in the report
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); // Enable the plugin
    },
    specPattern: "cypress/e2e/**/*.spec.js", // Ensure spec files are detected
  },
});
