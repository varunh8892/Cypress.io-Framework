

describe('Home page top Menu Navigation links test suite', () => 

{

    it('verify the Cypress IO Navigation Menu links on HomePage ', { viewportWidth: 1500, viewportHeight: 1000 }, () => 
    {
      cy.visit('https://docs.cypress.io/')

      cy.title().should('eq','Why Cypress? | Cypress Documentation')

     
      cy.get('[data-test=overview] > .text-left').click();

      cy.get('#In-a-nutshell').should('be.visible');

      cy.wait(2);

      cy.get('.scrollactive-nav > :nth-child(2) > .block').click();

      cy.get('#Who-uses-Cypress').should('be.visible');

      cy.wait(2);

      cy.get('.scrollactive-nav > :nth-child(3) > .block').click();

      cy.get('#Cypress-ecosystem').should('be.visible');

      cy.wait(2);

      cy.get('.scrollactive-nav > :nth-child(4) > .block').click();

      cy.get('#Our-mission').should('be.visible');

      cy.wait(2);

      cy.get('.scrollactive-nav > :nth-child(4) > .block').click();

      cy.get('#Our-mission').should('be.visible');

      cy.wait(2);

      cy.get('.scrollactive-nav > :nth-child(5) > .block').click();

      cy.get('#Features').should('be.visible');

      cy.wait(2);

      cy.get('.scrollactive-nav > :nth-child(10) > .block').click();

      cy.get('#Test-types').should('be.visible');

      cy.wait(2);

      cy.get('.scrollactive-nav > :nth-child(15) > .block').click();

      cy.get('#Cypress-in-the-Real-World').should('be.visible');

      cy.wait(2);

      cy.get('.text-blue').click();

      cy.get('.main-content-title').should('be.visible');

    })


  })