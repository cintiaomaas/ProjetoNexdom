# ProjetoNexdom

Projeto Nexdom etapa de desafio

## Pre-requisitos

É necessário ter o Node.js e o npm instalados para executar esse projeto.

> Eu usei as versões `v18.16.1` e `9.5.1` do Node.js and npm, respectivamente. 

## Instalação

Execute `npm install` (ou `npm i`) para instalar as dependências de desenvolvimento.

Execute `npm install --save-dev @badeball/cypress-cucumber-preprocessor @cucumber/cucumber` para intalar as dependencias do cucumber.

Execute `npm install dotenv --save-dev` para instalar o pacote dotenv para guardar informações sensíveis como token

## Configuração
No cypress.config.js:
Verifique se as dependências do cucumbere os plugins estão corretamente configurados.

Configure o config.env.TOKEN_API = process.env.TOKEN_API para guardar as infomações sensíveis no arquivo criado no .env

## Tests

Para executar os teste de api execute o comando `npx cypress run --spec "cypress/e2e/api/**/*.feature"` para executar em modo headless.

Para executar os teste de ui execute o comando `npx cypress run --spec "cypress/e2e/ui/**/*.feature"` para executar em modo headless ou 
execute o comando `npx cypress open --spec "cypress/e2e/ui/**/*.feature"` para executar em modo interativo numa janela de visualização do ambiente de trabalho..

___

Esse projeto foi desenvolvido por [Cintia] (https://github.com/cintiaomaas).