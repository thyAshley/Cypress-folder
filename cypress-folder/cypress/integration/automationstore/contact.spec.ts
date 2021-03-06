/// <reference types="cypress">

describe("Test contact on Automation store ", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get('[href$="/contact"]')
      .click()
      .then((item) => console.log(item.text()));
    cy.fixture("userDetails").as("user");
  });

  it("test happy path for contact us", () => {
    cy.get("@user").then((user: any) => {
      cy.get("#ContactUsFrm_first_name").type(user.firstName);
      cy.get("#ContactUsFrm_email").type(user.email);
    });
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("Enquiry is entered here");
    cy.get('button[title="Submit"]').click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.contains(/continue/i).click();
    cy.url().should("equal", "https://automationteststore.com/");
    cy.log("Test has completed");
  });
});
