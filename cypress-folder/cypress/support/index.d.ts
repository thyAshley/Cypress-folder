/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    selectProduct(value: string): Chainable<Element>;
  }
}
