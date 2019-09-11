describe('Home page', function(){
    it('Should show home page', function(){
        cy.visit('/')
        cy.get('h1').eq(0).should('contain', 'Get the best deals on your rides');
        cy.wait(5000);
        cy.get('button.btn').click()
        
    })
    
})


