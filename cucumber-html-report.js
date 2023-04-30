const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Local test machine",
    platform: {
      name: "Windows 10 Pro",
      version: "21H2",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Star Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});