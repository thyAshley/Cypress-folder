/// reference type="Cypress" />

class Homepage_PO {
  visitHomepage() {
    cy.visit(Cypress.env("webdriver"));
  }

  clickOn_ContactUs() {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
  }
}

export default Homepage_PO;
