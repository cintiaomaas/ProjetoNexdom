class CarreirasPages {
    visit() {
        cy.visit('/Carreiras');
    }

    clicarAcessarVagas() {
        cy.contains('Acessar as vagas').first()
            .should('be.visible')
            .invoke('removeAttr', 'target')
            .click();
    }
}

export default new CarreirasPages();
