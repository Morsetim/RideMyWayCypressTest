describe('Sign in', () =>{
    it('Should sign in user', () =>{
        cy.visit('/auth/login')
        cy.get('input[name="email"]').type('morsxossxs@gmail.com')
        cy.get('input[name="password"]').type('qwertyuiop123')
        cy.get('button.btn').click();
    })
    it('Should throw error for unauthenticated user', () =>{
        cy.visit('/auth/login')
        cy.get('input[name="email"]').type('orsxossxs@gmail.com')
        cy.get('input[name="password"]').type('qwertyuiop123')
        cy.get('button.btn').click();
        cy.wait(2000)
        cy.get('.errorMessage').contains('User does not exist')
    })
})