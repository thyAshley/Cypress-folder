/// <reference types="cypress">

describe('Web security', () => {
  it('two different super domain', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.visit('https://automationteststore.com/')
  })
  it('two different super domain via user action', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#automation-test-store').invoke('removeAttr','target').click()
  })
})