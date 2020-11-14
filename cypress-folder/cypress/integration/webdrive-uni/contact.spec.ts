/// <reference types="cypress">

describe('Test Contact Us Page', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#contact-us').invoke('attr','target','_self').click();
  })
  it('should be able to submit a correctly filled up form', () => {
    cy.get('[name="first_name"]').type('Joe');
    cy.get('[name="last_name"]').type('biden');
    cy.get('[name="email"]').type('joebiden@gmail.com');
    cy.get('[name="message"]').type('this is a message');
    cy.get('[type="submit"]').click();
    cy.get('#contact_reply').children('h1').should('have.text', 'Thank You for your Message!')
  })

  // it.only('should not be able to submit form successfully if form not filled in', () => {
  //   cy.get('[name="first_name"]').type('Tom');
  //   cy.get('[name="last_name"]').type('biden');
  //   cy.get('[name="message"]').type('This is wrong');
  //   cy.get('[type="submit"]').click();
  // })
})