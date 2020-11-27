/// <reference type="cypress">

describe("Add multiple item to basket", () => {
  beforeEach("validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("calculate total normal and sale product", () => {
    cy.fixture("products").then(({ productName }) => {
      for (let i = 0; i < productName.length; i++) {
        cy.addProductToBasket(productName[i]);
      }
    });
  });
});
