describe('renders the home page', () => {
  it('renders correctly', () => {
    //Opens the home page
    cy.visit("http://localhost:3000");
    //Clicks on Start now to swap to the auction website
    cy.get('.bKrHPb').click();
    //Register as a new user 
    cy.get('#register').click();
    // Type email and verify
    // that the value has been updated
    cy.get('#email')
      .type('test500@gmail.com')
      .should('have.value', 'test500@gmail.com')
    // Type password and verify
    // that the value has been updated
    cy.get('#password')
      .type('test123')
      .should('have.value', 'test123')
    // ReType password and verify
    // that the value has been updated
    cy.get('#confpass')
      .type('test123')
      .should('have.value', 'test123')
    //Clicks register button on the form
    cy.get('#registerbtn').click()
    //Adding a car
    cy.get('#addbtn').click()
    //filling the car information
    cy.get('#title')
      .type('car')
    cy.get('#desc')
      .type('good car')
    cy.get('#price')
      .type('500')
    cy.get('#time')
      .type('14')
    cy.get('#image').selectFile("car3.jpg")
    //Submiting the new car
    cy.get('#submit').click()
  })
})