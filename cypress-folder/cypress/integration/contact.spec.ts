/// <reference types="cypress">

describe('Test Contact Us Page', () => {
  it('should be able to submit a correctly filled up form', () => {
    cy.visit('http://webdriveruniversity.com/index.html')
    cy.get('#contact-us').invoke('attr','target','_self').click()
    cy.get('[name="first_name"]').type('Joe')
    cy.get('[name="last_name"]').type('biden')
    cy.get('[name="email"]').type('joebiden@gmail.com')
    cy.get('[name="message"]').type('i win')
  })

  // it('should not be able to submit form successfully if form not filled in', () => {
  //   cy.visit('http://webdriveruniversity.com/index.html')
  // })
})