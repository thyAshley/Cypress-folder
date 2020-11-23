/// <reference types="cypress">

describe('Testing Checkboxes', () => {
  it('Handle checkboxes', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
    cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
    cy.get('@option-1').check().should('be.checked')
  });
  it('unselect checkbox',() => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
    cy.get(':nth-child(5) > input').as('option3');
    cy.get('@option3').uncheck().should('not.be.checked')
  });
  it('select multiple checkbox', () => {
    cy.get('input[type="checkbox"]').check(["option-1","option-2","option-3","option-4"]).should('be.checked')
  })
})