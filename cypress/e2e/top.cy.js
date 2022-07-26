describe('Top page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('h1').contains('Welcome to Next.js!')
  })
})
