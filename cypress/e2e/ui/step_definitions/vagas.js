/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CarreirasPages from '../pages/CarreirasPages';
import VagasPages from '../pages/VagasPages';

Given('que o usuário está na página inicial', () => {
    cy.visit('/');
});

Given('o usuário clica em carreiras', () => {
    CarreirasPages.visit();
    CarreirasPages.clicarAcessarVagas();
});

When('o usuário preenche o campo de nome da vaga com {string}', (campoVaga) => {
    VagasPages.preencherNomeVaga(campoVaga);
});

When('o usuário clica na lupa', () => {
    VagasPages.clicarNaLupa();
});

Then('o sistema exibe a mensagem {string}', (mensagemVaga) => {
    VagasPages.validarVagasFiltradas(mensagemVaga);
});

Then('o usuário visualiza "Analista de Qualidade de Software Júnior" e "Analista de Qualidade de Software Pleno"', () => {
    VagasPages.validarVagasFiltradas('Analista de Qualidade de Software Júnior');
    VagasPages.validarVagasFiltradas('Analista de Qualidade de Software Pleno');
});
