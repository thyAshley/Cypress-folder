/// <reference types="Cypress" />

describe("Working with Date Picker", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/index.html");
    cy.get("#datepicker").invoke("removeAttr", "target").click();
  });
  it("Selecting Date", () => {
    function selectMonthAndYear(year: string) {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          const date = currentDate.text().split(" ");
          if (+date[1] < +year) {
            cy.get(".next").first().click();
            selectMonthAndYear(year);
          } else if (+date[1] > +year) {
            cy.get(".prev").first().click();
            selectMonthAndYear(year);
          }
        });
    }

    let date = new Date(Date.now());
    cy.log(date.getUTCDate().toString());
    cy.log((date.getUTCMonth() + 1).toString());
    const year = date.getFullYear();
    cy.get(".input-group-addon").click();
    selectMonthAndYear("2019");
  });
});
