/// <reference types="cypress">

describe('Testing Radio Button', () => {
  it('Handle radio buttons', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
    cy.get('#radio-buttons').find('input[type="radio"]').eq(1).check();
  });
  it('validate state of radio buttons', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
    cy.get('#radio-buttons-selected-disabled').find('input[type="radio"]').as('radio');
    cy.get('@radio').get('[value="lettuce"]').should('not.be.checked');
    cy.get('@radio').get('[value="pumpkin"]').should('be.checked');
    cy.get('@radio').get('[value="cabbage"]').should('be.disabled');
  });
})