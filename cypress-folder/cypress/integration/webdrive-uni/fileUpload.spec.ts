/// <reference types="Cypress" />

describe("Working with File Upload", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/index.html");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
  });
  it("upload file", () => {
    cy.fixture("mcdonald.jpg", "base64").then((fileContent) => {
      return cy.get("#myFile").attachFile({
        filePath: fileContent,
        fileContent: fileContent,
        fileName: "mcdonald.jpg",
        mimeType: "image/jpg",
      });
    });
    cy.get("#submit-button").click();
  });
});
