context('Aula 3', () => {
  beforeEach(() => {
    cy.visit('http://httpd/aula3')
  })

  it('Interagindo com Aula 3', function () {
    cy.contains('Id: 1')
    cy.contains('Nome: Pedro Schneider')
    cy.contains('Profissão: Desenvolvedor')
  })
})