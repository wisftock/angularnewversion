module.exports = function (config) {
  config.set({
    frameworks: ["jasmine-jquery", "jasmine", "fixture"],
    plugins: ["karma-"],
    preprocessors: {
      "test/jasmine/spec/Rio/**/.js": ["babel"],
      "src/webapp/Rio/js/.js": ["babel"],
      "src/webapp/Rio/js/!(vendor|component)/**/.js": ["babel"],
    },
    babelPreprocessor: {
      options: {
        sourceMap: "inline",
        presets: ["@babel/preset-env"],
        plugins: config.server
          ? [
              "@babel/plugin-proposal-optional-chaining",
              "@babel/plugin-proposal-nullish-coalescing-operator",
            ]
          : [
              [
                "istanbul",
                {
                  exclude: ["test/jasmine/spec/**/*.js"],
                },
              ],
              "@babel/plugin-proposal-optional-chaining",
              "@babel/plugin-proposal-nullish-coalescing-operator",
            ],
        overrides: [
          {
            sourceType: "script",
          },
        ],
      },
    },
    coverageIstanbulReporter: {
      reports: ["html", "cobertura", "text-summary"],
      dir: "target/coverage/rio/",
      thresholds: {
        global: {
          lines: 99.17,
          statements: 99.14,
          branches: 94.17,
          functions: 98,
        },
      },
    },
    specReporter: {
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: process.env.NODE_ENV === "debug",
      showSpecTiming: false,
      failFast: false,
    },
    client: {
      jasmine: {
        random: false,
        hideDisabled: true,
      },
    },
    reporters: ["progress", "coverage-istanbul", "spec", "summary", "kjhtml"],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_DEBUG,
    browsers: ["PhantomJS, ChromeHeadlessCI", "ChromeHeadless"],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },

      OmniChrome: {
        base: "Chrome",
        flags: [
          "--start-maximized",
          "--allow-file-access-from-files",
          "--disable-translate",
          "--disable-extensions",
          "--remote-debugging-port=9223",
          "--auto-open-devtools-for-tabs",
          "http://localhost:9876/debug.html",
        ],
      },
    },
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
  });
};

// browsers: ["Chrome", "ChromeHeadless", "ChromeHeadlessCI"],
//     singleRun: false,
//     restartOnFileChange: true,
//     customLaunchers: {
//       ChromeHeadlessCI: {
//         base: "ChromeHeadless",
//         flags: ["--no-sandbox"],
//       },
//     },
