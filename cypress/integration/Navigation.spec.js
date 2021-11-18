
describe('User can use the navigation to move around the app', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Loads on the "Available Stories" page, with all the buttons', () => {
        cy.get('#available-page').contains('Available Stories');
        cy.get('.navigation').children().should('have.length', 3);
    });
    it('Buttons navigate to proper pages', () => {
        cy.get('#completed-btn').click();
        cy.get('#completed-page').contains('Completed Stories');

        cy.get('#create-btn').click();
        cy.get('.create');

        cy.get('#available-btn').click();
        cy.get('#available-page').contains('Available Stories');
    });
    it('Clicking on a story brings you to the proper page', () => {
        cy.get('.story').first().click();
        cy.get('.contribute');

        cy.get('#completed-btn').click();
        cy.get('.story').first().click();
        cy.get('.story');
    })
})