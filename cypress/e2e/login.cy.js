describe('fundamental page', () => {
  
  it('passes', () => {
    cy.visit('/')
    cy.get('[data-cy="navbar-home"]').should('have.text', 'Acasă')

    cy.get('[data-cy="logo-img"]')
    .should('have.prop', 'tagName', 'IMG')
    .and('have.attr', 'src')
    .and('include', '/assets/images/logo9.png')

  })
})