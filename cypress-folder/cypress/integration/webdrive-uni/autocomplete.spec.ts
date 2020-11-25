/// <reference types="cypress">

describe('Testing Autocomplete', () => {
  it('Handle autocomplete', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#autocomplete-textfield').invoke('removeAttr','target').click();
    cy.get('[placeholder="Food Item"]').type('A');
    cy.get('#myInputautocomplete-list > *').each((element, idx, list) => {
      const prod = element.text();
      const productToSelect = 'Avacado';
      if (prod === productToSelect) {
        element.click();
        cy.get('#submit-button').click();
        cy.url().should('contain', productToSelect)
      }
    })
  });

  it('select grapes',() => {
    cy.get('#myInput').type('g');
    cy.get('#myInputautocomplete-list').contains(/grape/i).click()
    cy.get('#submit-button').click();
    cy.url().should('contain', 'Grape')
  })
})