/// <reference types="cypress">

describe('Test contact on Automation store ', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/');
    cy.get('[href$="/contact"]').click()
  })
  it('test happy path for contact us', () => {
    cy.get('#ContactUsFrm_first_name').type('Joe');
    cy.get('#ContactUsFrm_email').type('Joe@gmail.com');
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
    cy.get('#ContactUsFrm_enquiry').type('Enquiry is entered here');
    cy.get('button[title="Submit"]').click();
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    cy.contains(/continue/i).click();
    cy.url().should('equal', 'https://automationteststore.com/')
    
  })


})