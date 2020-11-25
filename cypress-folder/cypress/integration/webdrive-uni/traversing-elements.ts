/// <reference types="Cypress" />

describe("Traversing Dom Element", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/index.html");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  });
  it("get children of DOM", () => {
    cy.get("[class='breadcrumb traversal-breadcrumb']")
      .children()
      .get(".active")
      .should("contain", "Contact");
  });
  it("get children of DOM", () => {
    cy.get("[class='badge traversal-badge']")
      .closest("ul")
      .should("have.class", "list-group");
  });
  it("eq() to retrieve specific element by index", () => {
    cy.get(".traversal-drinks-list > li").eq(2).should("contain", "Milk");
  });

  it("filter() should give DOM element that match selector", () => {
    cy.get('[class="btn-group btn-group-toggle"] > *')
      .filter(".active")
      .should("contain", "Button-1");
  });
  it("find() retrieve DOM element of given selector", () => {
    cy.get('[class="pagination traversal-pagination"]')
      .find(".page-link")
      .should("have.length", 7);
  });
  it("first() retrieve first item in DOM", () => {
    cy.get('[class="table table-light traversal-table"] > tbody > tr >td')
      .first()
      .should("contain", "Andy");
  });
  it("last() retrieve last item in DOM", () => {
    cy.get('[class="table table-light traversal-table"] > tbody > tr >td')
      .last()
      .should("contain", "Scott");
  });
  it("nextAll() retrieve last item in DOM", () => {
    cy.get("#tea").nextAll().should("have.length", 3);
  });
  it("nextUntil() retrieve last item in DOM", () => {
    cy.get("#coffee").nextUntil("#sugar");
  });
  it("not() to remove DOM element", () => {
    cy.get(".traversal-button-states > button")
      .not(".disabled")
      .should("not.have.class", "disabled");
  });
  it("parent() to get parent element of DOM", () => {
    cy.get(".traversal-mark").parent().should("contain", "Lorem ipsum dolor");
  });
  it("parents() to get parent element of DOM", () => {
    cy.get(".traversal-cite").parents().should("match", "blockquote");
  });
  it("prev() retrieve previous item in DOM", () => {
    cy.get("#sugar").prev().should("contain", "Espresso");
  });
  it("prevAll() retrieve all previous item in DOM", () => {
    cy.get("#sugar").prevAll().should("have.length", 4);
  });
  it("prevUntil() return all element until condition met", () => {
    cy.get("#veggie").prevUntil("#fruits");
  });
  it.only("siblings() return all sibling element .active", () => {
    cy.get(".traversal-button-other-states .active")
      .siblings()
      .should("have.length", 3);
  });
});
