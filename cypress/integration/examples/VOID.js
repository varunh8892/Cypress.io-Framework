
describe('Verify All the available Links on the HomePage ', () => 
{
    it('verify All the Links in the Cypress IO links on HomePage ', { viewportWidth: 1200, viewportHeight: 1300 }, () => 
    {
        cy.visit('https://docs.cypress.io/')
        cy.title().should('eq','Why Cypress? | Cypress Documentation')

Cypress.Commands.add('checkBankLinksStatus', () => {
    
   
    
    cy.get('a')
        .each(($a) => {
            console.log('$a', $a);
            const href = $a.prop('href');
            console.log('href', href)

            request(href, function (error, response, body) {
                return response.statusCode.then(function (code) {
                    if(code == 404){
                        throw new Error('whoops! broken link', href);
                    }
                    expect(code).to.eq(200);
                })
            })
        })
})


})


})