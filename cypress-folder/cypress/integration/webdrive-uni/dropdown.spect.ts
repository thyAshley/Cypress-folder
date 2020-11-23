/// <reference types="cypress">

describe('Testing Dropdown', () => {
  it('Handle Dropdown list', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
    cy.get('#dropdowm-menu-1').select('c#')
    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
    cy.get('#dropdowm-menu-3').select('css').should('have.value', 'css')
  });
})