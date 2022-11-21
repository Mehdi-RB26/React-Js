describe('Login and make a bid', () => {
  it('login and bid a car', () => {
    cy.visit('http://localhost:3000/Home2')
    cy.get('#login').click();
    // Type email and verify
    // that the value has been updated
    cy.get('#logemail')
      .type('test100@gmail.com')
      .should('have.value', 'test100@gmail.com')
    // Type email and verify
    // that the value has been updated
    cy.get('#logpass')
      .type('test100')
      .should('have.value', 'test100')
    //login button press
    cy.get('#logbtn').click()
    //bid a car
    cy.get('#bid').click()
  })
})