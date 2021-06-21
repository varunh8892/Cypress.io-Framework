describe('Home page top Menu Navigation links test suite', () => 
{
    it('verify the Cypress IO Navigation Menu links on HomePage ', { viewportWidth: 1500, viewportHeight: 1000 }, () => 
    {
      cy.visit('https://docs.cypress.io/')
      cy.title().should('eq','Why Cypress? | Cypress Documentation')
     
      cy.get('[data-test=overview] > .text-left').click();

      cy.get('[data-test=Overview-children] > :nth-child(2) > .rounded-md').should('be.visible');

      cy.wait(2); 

      cy.get('[data-test=Overview-children] > :nth-child(2) > .rounded-md').click();

      cy.get('.main-content-title').should('be.visible');

      cy.wait(2);

      cy.get('[data-test=getting-started] > .text-left').should('be.visible');
      
      cy.get('[data-test=getting-started] > .text-left').click();

      cy.wait(2);


      cy.get('[data-test=core-concepts] > .text-left').should('be.visible');

      cy.wait(2);
    
      cy.wait(2);

      cy.get('[data-test=dashboard] > .text-left').should('be.visible');
  
      cy.wait(2);

      cy.get('[data-test=guides] > .text-left').should('be.visible');
    
      cy.wait(2);

      cy.get('[data-test=testing-strategies] > .text-left').should('be.visible');

     cy.get('[data-test=testing-strategies] > .text-left').should('be.visible');

     cy.get('[data-test=continuous-integration] > .text-left').should('be.visible');

     cy.get('[data-test=component-testing] > .text-left').should('be.visible');

     cy.get('[data-test=migrating-to-cypress] > .text-left').should('be.visible');

     cy.get('[data-test=tooling] > .text-left').should('be.visible');

     cy.get('[data-test=references] > .text-left').should('be.visible');
  
    })

  })
