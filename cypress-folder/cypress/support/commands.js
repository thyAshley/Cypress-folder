// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-file-upload";

Cypress.Commands.add("selectProduct", (productName) => {
  const product = new RegExp(`${productName}`, "i");
  return cy.get(".fixed_wrapper .prdocutname").each(($el, idx) => {
    if ($el.text().search(product) !== -1) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add("fillForm", (data) => {
  cy.get('[name="first_name"]').type(data.firstName);
  cy.get('[name="last_name"]').type(data.lastName);
  cy.get('[name="email"]').type(data.email);
  cy.get('[name="message"]').type(data.body);
});

Cypress.Commands.add("addProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, idx) => {
    if ($el.text() === productName) {
      cy.get(".productcart").eq(idx).click();
    }
  });
});
