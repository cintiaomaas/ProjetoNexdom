/// <reference types="Cypress" />

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const token = Cypress.env('TOKEN_API');
const apiUrl = 'https://api.github.com';
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github.v3+json',
};

let repoName = 'teste-github-api';
let owner = '';
let issueNumber = '';

Given('que eu possuo um token de acesso válido', () => {
  expect(token).to.be.a('string').and.not.be.empty;
});

When('eu envio uma requisição para criar um repositório', () => {
  cy.request({
    method: 'POST',
    url: `${apiUrl}/user/repos`,
    headers,
    body: { name: repoName, description:'This is your first repo!', private: false },
  }).then((response) => {
    expect(response.status).to.eq(201);
    owner = response.body.owner.login; //guarda o usuário da requisição
  });
});

Then('o repositório deve ser criado com sucesso', () => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}/repos/${owner}/${repoName}`,
    headers,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq(repoName);
  });
});

Then('o nome do repositório deve ser retornado corretamente', () => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}/repos/${owner}/${repoName}`,
    headers,
  }).then((response) => {
    expect(response.body.name).to.eq(repoName);
  });
});

When('eu envio uma requisição para criar uma issue no repositório', () => {
  cy.request({
    method: 'POST',
    url: `${apiUrl}/repos/${owner}/${repoName}/issues`,
    headers,
    body: { title: 'Found a bug', body: 'I am having a problem with this.' },
  }).then((response) => {
    expect(response.status).to.eq(201);
    issueNumber = response.body.number;
  });
});

Then('os detalhes da issue devem ser retornados corretamente', () => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}/repos/${owner}/${repoName}/issues/${issueNumber}`,
    headers,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.title).to.eq('Found a bug');
  });
});

When('eu envio uma requisição para excluir o repositório', () => {
  cy.request({
    method: 'DELETE',
    url: `${apiUrl}/repos/${owner}/${repoName}`,
    headers,
  }).then((response) => {
    expect(response.status).to.eq(204);
  });
});

Then('o repositório deve ser excluído com sucesso', () => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}/repos/${owner}/${repoName}`,
    headers,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(404);
  });
});
