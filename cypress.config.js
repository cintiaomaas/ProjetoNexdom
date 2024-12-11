const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/ui/**/*.feature',
    baseUrl: 'https://nexdom.tec.br/', // Altere conforme sua aplicação
    supportFile: false, // Isso pode ser alterado conforme sua estrutura
    env: {
      stepDefinitions: 'cypress/e2e/ui/step_definitions/*.js', // Adiciona o caminho da pasta de step definitions
    },
  },
});
