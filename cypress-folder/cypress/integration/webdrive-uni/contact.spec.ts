/// <reference types="cypress">

describe("Test Contact Us Page", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/index.html");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
  });

  it.only("should be able to submit a correctly filled up form", () => {
    cy.document().should("have.property", "charset").and("equal", "UTF-8");
    cy.title().should("contains", "WebDriver");
    cy.fixture("example").then((data) => {
      cy.fillForm(data);
    });
    cy.get('[type="submit"]').click();
    cy.get("#contact_reply")
      .children("h1")
      .should("have.text", "Thank You for your Message!");
  });

  it("should not be able to submit form successfully if form not filled in", () => {
    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("biden");
    cy.get('[name="message"]').type("This is wrong");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error");
  });
});
