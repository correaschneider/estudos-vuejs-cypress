context('Aula 1', () => {
  beforeEach(() => {
    cy.visit('http://httpd/aula1')
  })

  it('Interagindo com Aula 1', function () {
    cy.contains('Aula 01 - Vuejs do jeito ninja!')
  })
})