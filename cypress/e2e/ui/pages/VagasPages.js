class VagasPages {
    preencherNomeVaga(nome) {
        cy.origin('https://vempranexdom.gupy.io', { args: { nome } }, ({ nome }) => {
            cy.contains('#VemproTime!').should('be.visible');
            cy.get('#job-search').type(nome);
        });
    }

    clicarNaLupa() {
        cy.origin('https://vempranexdom.gupy.io', () => {
            cy.get('#job-search-button').click();
        });
    }

    validarVagasFiltradas(mensagemEsperada) {
        cy.origin('https://vempranexdom.gupy.io', { args: { mensagemEsperada } }, ({mensagemEsperada  }) => {
             cy.contains(mensagemEsperada).should('be.visible');
        });
    }
}

export default new VagasPages();
