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

  it('should double click element', () => {
    cy.get('#double-click').dblclick();
  })
  
  it('should click and hold', () => {
    cy.get('#click-box').trigger('mousedown').should('contain', 'Well done! keep holding that click now.....').then((el) => {
      expect(el.trigger('mouseup')).to.contain('Dont release me!!!')
    })
  })
})