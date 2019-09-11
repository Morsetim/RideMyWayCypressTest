describe('Sign up page', function(){
    it('Should sign a new user successfully', function(){
        cy.visit('/auth/signup')
        cy.get('input[name="firstname"]').type('Maurceddd')
        cy.get('input[name="lastname"]').type('Etimcxc')
        cy.get('input[name="username"]').type('mmmuxx')
        cy.get('input[name="email"]').type('morsxossxs@gmail.com')
        cy.get('input[name="password"]').type('qwertyuiop123')
        cy.get('input[name="confirmPassword"]').type('qwertyuiop123')
        cy.get('button.btn').click();

        cy.get('div.feature').should('have.length', 3)
    })
    
    it('Should throw an error for already existing user', function(){
        cy.visit('/auth/signup')
        cy.get('input[name="firstname"]').type('Mauriced')
        cy.get('input[name="lastname"]').type('Etimx')
        cy.get('input[name="username"]').type('mmmmxx')
        cy.get('input[name="email"]').type('morsssssxs@gmail.com')
        cy.get('input[name="password"]').type('qwertyuiop123')
        cy.get('input[name="confirmPassword"]').type('qwertyuiop123')
        cy.get('button.btn').click();

        cy.get('.errorMessage').contains('User already exists')
    })
})
