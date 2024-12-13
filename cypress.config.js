const { defineConfig } = require('Cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
require('dotenv').config();

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
      config.env.TOKEN_API = process.env.TOKEN_API;

      return config;
    },
    specPattern: ['cypress/e2e/ui/**/*.feature', 'cypress/e2e/api/**/*.feature'],
    baseUrl: 'https://nexdom.tec.br/', 
    supportFile: false, 
    env: {
      stepDefinitions: [
        'cypress/e2e/ui/step_definitions/*.js',
        'cypress/e2e/api/step_definitions/*.js',
      ],
    },
  },
});
