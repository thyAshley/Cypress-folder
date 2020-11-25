/// <reference types="cypress">

describe('Testing Scroll Actions', () => {
  it('Handle Scroll Actions', () => {
    cy.visit('http://webdriveruniversity.com/index.html');
    cy.get('#actions').scrollIntoView() .invoke('removeAttr', 'target').click();
  });

  it('should drag and drop component', () => {
    cy.get('#draggable').trigger('mousedown', {which: 1})

    cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})

  })
})