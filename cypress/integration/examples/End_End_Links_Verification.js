describe('Verify All the available Links on the HomePage ', () => 
{
    it('verify All the Links in the Cypress IO links on HomePage ', { viewportWidth: 1200, viewportHeight: 1300 }, () => 
    {
      cy.visit('https://docs.cypress.io/')

      cy.title().should('eq','Why Cypress? | Cypress Documentation')

     
      cy.get("a").each($a => 
        {

      const message = $a.text();

      expect($a, message).to.have.attr("href").not.contain("undefined");

}
);
     

    })


  })