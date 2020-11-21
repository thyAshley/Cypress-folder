/// <reference type="cypress">

describe('alias testing', () => {
  it('validate a specific hair care product', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

    cy.get('.fixed_wrapper .prdocutname').eq(0).as('productThumbnail')
    cy.get('@productThumbnail').invoke('text').its('length').should('be.greaterThan', 5)
    cy.get('@productThumbnail').invoke('text').should('contain', 'Seaweed')
  })
})