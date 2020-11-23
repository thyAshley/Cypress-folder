/// <reference types="cypress">


describe('Iterate over elements ', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/');
    cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
  })
  it('Log information of all hair care products', () => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, idx) => {
      cy.log("index: " + idx +  " : " + $el.text())
    })
  })
  it.only('Add specific product to basket', () => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, idx) => {
      if ($el.text().search(/curl/i) !== -1) {
        cy.wrap($el).click();
      }
    })
  })

})