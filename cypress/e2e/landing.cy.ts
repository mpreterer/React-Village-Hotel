describe('Landing page', () => {
  it('should have a form', () => {
    cy.visit('http://localhost:3000');
    cy.get('input').should('have.value', '');
  })
})