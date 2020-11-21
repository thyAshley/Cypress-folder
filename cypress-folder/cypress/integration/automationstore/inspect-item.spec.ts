/// <reference type="cypress">

import { first } from "cypress/types/lodash";

describe('Inspect Automation Test Store Items', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/');
  })
  it('click on first item using item text', () => {
    cy.get('.prdocutname').eq(0).click()
  });
  it('click on first item using index', () => {
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click().then(item => {
      console.log(`selected ${item.text()}`)
    })
  });
  it('Navigating to specific product pages', () => {
    const makeupLink = cy.get('a[href*="product/category&path="]').contains(/makeup/i)    
    makeupLink.click();
    const skincareLink = cy.get('a[href*="product/category&path="]').contains(/skincare/i)
    skincareLink.click();
  })
  it('Navigating to make up page', () => {
    const makeupLink = cy.get('a[href*="product/category&path="]').contains(/makeup/i)    
    makeupLink.click();
    cy.get('h1 .maintext').then($header => {
      const headerText = $header.text()
      cy.log(headerText);
      expect(headerText).to.contain('Makeup')
    })
  })
  it.only('validate property of contact us page', () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact');
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');

    cy.contains('#ContactUsFrm', 'Contact Us Form').then($text => {
      const firstName = $text.find('#field_11').text();
      expect(firstName).to.contain('First name')
      cy.get('#field_11').then(fnText => {
        cy.log(fnText.text())
      })
    })


  })

})
