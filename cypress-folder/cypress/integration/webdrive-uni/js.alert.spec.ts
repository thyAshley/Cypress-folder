/// <reference types="cypress">

describe('Handle Alerts', () => {

  it('Confirm JS alerts contains the correct text', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#popup-alerts').invoke('removeAttr','target').click();
    cy.url().should('contain', 'Popup');
    cy.get('#button1').click();
    cy.on('window:alert', (str) => {
      expect(str).to.eq('I am an alert box!')
    })
    
  })

  it('click ok', () => {
    cy.get('#button4').click()
    cy.on('window:confirm', (str) => {
      return true
    })
    cy.get('#confirm-alert-text').contains('You pressed OK!')

  })
  it('click cancel', () => {
    cy.get('#button4').click();
    cy.on('window:confirm', (str) => {
      return false
    })
  })
  it('validate js confirm using a stub', () => {
    const stub = cy.stub();
    cy.on('window:confirm', stub)
    cy.get('#button4').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(() => {
      return true;
    }).then(() => {
      cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
  })
})