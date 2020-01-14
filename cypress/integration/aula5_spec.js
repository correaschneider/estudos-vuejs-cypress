context('Aula 5', () => {
  beforeEach(() => {
    cy.visit('http://httpd/aula5')
  })

  it('Interagindo com Aula 5', function () {
    let ul = cy
        .get('#name')
        .type('Teste')

  })
})