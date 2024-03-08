module.exports = function (config) {
  config.set({
    browsers: ["Chrome", "ChromeHeadlessCI"],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
  });
};
