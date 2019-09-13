describe('User create ride', () =>{
    it('Should create a new ride', () =>{
        cy.visit('/auth/login')
        cy.get('input[name="email"]').type('morsxossxs@gmail.com')
        cy.get('input[name="password"]').type('qwertyuiop123')
        cy.get('button.btn').click()
        cy.get('a[href="/create-ride"]').click()
        cy.get('input[name="location"]').type('lekki')
        cy.get('input[name="destination"]').type('ikeja')
        cy.get('input[name="departuretime"]').type('10:00:00')
        cy.get('input[name="datecreated"]').type('1999-12-12')
        cy.get('input[name="seatsavailable"]').type('2')
        cy.get('button.btn').click();
    })
})