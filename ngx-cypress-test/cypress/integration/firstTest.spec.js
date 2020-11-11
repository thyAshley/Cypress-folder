/// <reference types="cypress" />

describe("First test suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.get(".menu-title").contains("Forms").click();
    cy.get(".menu-title").contains("Form Layouts").click();
    // by Tag Name
    cy.get("input");

    // by ID
    cy.get("#inputEmail1");

    // by class name
    cy.get(".input-full-width");

    // by attribute name
    cy.get("[placeholder]");

    // by attribute name and value
    cy.get('[placeholder="Email"');

    // by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    // by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]');

    // by Two different attributes
    cy.get('[placeholder="Email"][fullwidth]');

    // by tag name, attribute with value, id , class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    // most recommended way by Cypress
    cy.get('[data-cy="imputEmail1"]');
  });
});
