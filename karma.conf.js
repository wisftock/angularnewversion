module.exports = function (config) {
  config.set({
    // Rutas base que se usarán para resolver todos los archivos y patrones
    basePath: "",

    // Marco de trabajo de pruebas que se utilizará
    frameworks: ["jasmine"],

    // Archivos a incluir, lista de archivos/patrones a cargar en el navegador
    files: [
      // Todos los archivos de pruebas
      "tests/**/*.spec.js",
    ],

    // Lista de archivos a excluir
    exclude: [],

    // Lista de complementos a cargar
    plugins: ["karma-jasmine", "karma-chrome-launcher", "karma-junit-reporter"],

    // Navegadores a utilizar para ejecutar las pruebas
    browsers: ["Chrome", "ChromeHeadless"],

    // Formatos de informes
    reporters: ["progress", "junit"],

    // Configuración de informes JUnit para integración con GitLab CI
    junitReporter: {
      outputDir: "test_results", // Directorio de salida para los informes JUnit
      outputFile: "test-results.xml", // Nombre del archivo de informe JUnit
      useBrowserName: false, // Deshabilita el nombre del navegador en los informes JUnit
    },

    // Puerto del servidor web
    port: 9876,

    // Nivel de registro
    logLevel: config.LOG_INFO,

    // Habilita/deshabilita colores en la salida de la consola
    colors: false,

    // Tiempo de espera en milisegundos para reiniciar el servidor de pruebas
    autoWatch: false,

    // Configuración de pruebas en tiempo real (TDD)
    singleRun: true,

    // Tiempo de espera en milisegundos entre ejecución de pruebas
    concurrency: Infinity,
    customLaunchers: {
      // Headless: {
      //   base: "ChromeHeadless",
      //   flags: ["--no-sandbox"],
      // },
      ChromeHeadless: {
        base: "Chrome",
        flags: [
          "--headless",
          "--disable-gpu",
          "--no-sandbox",
          "--disable-setuid-sandbox",
        ],
      },
    },
  });
};
