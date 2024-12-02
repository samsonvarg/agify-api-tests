module.exports = {
  default: {
    require: ["ts-node/register", "features/step_definitions/**/*.ts"],
    format: [
      "progress",
      "json:reports/cucumber_report.json",
      "html:reports/cucumber_report.html",
    ],
    paths: ["features/**/*.feature"],
  },
};
