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

  it("second test", () => {
    cy.visit("/");
    cy.get(".menu-title").contains(/forms/i).click();
    cy.get(".menu-title")
      .contains(/form layout/i)
      .click();
    cy.contains('[status="warning"]', /sign in/i);
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();

    cy.contains("nb-card", /horizontal form/i).find('[type="email"]');
  });

  it.only("then and wrap method", () => {
    cy.visit("/");
    cy.get(".menu-title").contains(/forms/i).click();
    cy.get(".menu-title")
      .contains(/form layout/i)
      .click();

    cy.contains("nb-card", /using the grid/i).then((gridForm) => {
      const emailLabel = gridForm.find('[for="inputEmail1"]').text();
      const passwordLabel = gridForm.find('[for="inputPassword2"]').text();
      expect(emailLabel).to.equal("Email");
      expect(passwordLabel).to.equal("Password");
    });

    cy.contains("nb-card", /basic form/i).then((basicForm) => {
      const email = basicForm.find('[for="exampleInputEmail1"]').text();
      const password = basicForm.find('[for="exampleInputPassword1"]').text();
      expect(email).to.contain("Email");
      expect(password).to.equal("Password");

      cy.wrap(basicForm)
        .find('[for="exampleInputEmail1"]')
        .should("contain", "Email");
    });
  });
});
