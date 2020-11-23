/// <reference types="cypress">

describe('Validate webdriveruni homepage links ', () => {

  it('Confirm links redirect to correct pages', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#contact-us').invoke('removeAttr','target').click();
    cy.url().should('include', 'contactus.html')
    cy.go('back');
    cy.reload();
    cy.go('forward');
    cy.url().should('include', 'contactus.html');
    cy.go('back');
    cy.get('#login-portal').invoke('removeAttr', 'target').click();
    cy.url().should('contain','Login-Portal');
    cy.go('back');
    cy.get('#to-do-list').invoke('removeAttr', 'target').click();
    cy.url().should('contain','To-Do-List');
    cy.go('back')
  })


})