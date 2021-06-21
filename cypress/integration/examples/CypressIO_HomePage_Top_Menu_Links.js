
describe('Home page top Menu Navigation links test suite', () => 

{
    it('verify the Cypress IO Navigation Menu links on HomePage ', { viewportWidth: 1200, viewportHeight: 1300 }, () => 
    {
      cy.visit('https://docs.cypress.io/')
      cy.title().should('eq','Why Cypress? | Cypress Documentation')

      cy.contains('Guides').click();

      cy.title().should('eq','Why Cypress? | Cypress Documentation')   

      cy.url().should('include','/guides/overview')

      cy.contains('API').click();

      cy.title().should('eq','Table of Contents | Cypress Documentation')

      cy.url().should('include','/api/table-of-contents')

      cy.contains('Plugins').click();

      cy.title().should('eq','Plugins | Cypress Documentation')

      cy.url().should('include','plugins/directory')

      cy.contains('Examples').click();

      cy.title().should('eq','Recipes | Cypress Documentation')

      cy.url().should('include','/examples/recipes')

      cy.contains('FAQ').click();

      cy.title().should('eq','Using Cypress | Cypress Documentation')

      cy.url().should('include','/using-cypress-faq')


    })
 
  })