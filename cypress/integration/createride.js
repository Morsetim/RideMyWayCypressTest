describe('User create ride', () =>{
    it('Should create a new ride', () =>{
        cy.visit('/create-ride')
        cy.get('input[name="email"]').type('morsxossxs@gmail.com')
        cy.get('input[name="password"]').type('qwertyuiop123')
        cy.get('button.btn').click()
        cy.get('a[href="/create-ride"]').click()
        cy.get('input[name="location"]').type('lekki')
        cy.get('input[name="destination"]').type('ikeja')
        cy.get('input[name="departuretime"]').type('10:00:30')
        cy.get('input[name="departuretime"]').type('12-12-1999')
        cy.get('input[name="departuretime"]').type('2')
        cy.get('button.btn').click();
    })
})