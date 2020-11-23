/// <reference type="cypress">

describe('alias testing', () => {
  it('validate a specific hair care product', () => {
    cy.visit('https://automationteststore.com/')
    // cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

    // cy.get('.fixed_wrapper .prdocutname').eq(0).as('productThumbnail')
    // cy.get('@productThumbnail').invoke('text').its('length').should('be.greaterThan', 5)
    // cy.get('@productThumbnail').invoke('text').should('contain', 'Seaweed')
    cy.get('.thumbnail').as('products');
    cy.get('@products').should('have.length', 16)
    cy.get('@products').find('.productcart').invoke('attr', 'title').should('contain', 'Add')
    cy.get('@products').find('.nostock').should('contain', 'Out of Stock')
  })
  it.only('calculate total normal and sale product', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('products');
    cy.get('@products').find('.oneprice').invoke('text').as('itemprice');
    cy.get('@products').find('.pricenew').invoke('text').as('newprice');
    let totalPrice = 0;
    cy.get('@itemprice').then($linkText => {
      let itemPriceTotal = 0;
      let itemPrice = ($linkText as any).split('$');
      for (let i = 0; i < itemPrice.length; i++) {
        itemPriceTotal += +(itemPrice[i])
      }
      totalPrice += itemPriceTotal
      cy.log(itemPriceTotal.toString())
    })
    cy.get('@newprice').then($linkText => {
      let discountPrice = 0;
      let itemPrice = ($linkText as any).split('$');
      for (let i = 0; i < itemPrice.length; i++) {
        discountPrice += +(itemPrice[i])
      }
      totalPrice += discountPrice
      cy.log(discountPrice.toString())
    })
    .then(() => {
      cy.log('total price is: ' + totalPrice)
      expect(totalPrice).to.equal(664)
    })
  })
})