/// <reference types="Cypress" />

/// <reference types="Cypress" />

describe("Traversing Dom Element", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/index.html");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  });
  it("Calculate and assert total age of all user", () => {
    const userDetails: string[] = [];
    let totalAge = 0;
    cy.get("#thumbnail-1 td")
      .each((element, idx, list) => {
        userDetails[idx] = element.text();
      })
      .then(() => {
        for (let i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            totalAge += Number(userDetails[i]);
          }
          cy.log(userDetails[i]);
        }

        cy.log(totalAge.toString());
        expect(totalAge).to.eq(322);
      });
  });
});
