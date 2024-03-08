module.exports = function (config) {
  config.set({
    browsers: ["Chrome", "ChromeHeadless", "ChromeHeadlessCI"],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
  });
};
