/// <reference types="cypress">

describe('Testing of EA App', () => {
  it('Login application', () => {
    cy.visit('http://eaapp.somee.com/')
    cy.contains(/login/i).click()
    cy.url().should("include", "/Login")

    cy.get('#UserName').type('admin');
    cy.get('#Password').type('password');

    cy.get('.btn').click()
  })
})
