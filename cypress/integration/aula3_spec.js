describe('Aula 3', () => {
	it('Interagindo com Aula 3', function () {
		cy.visit('aula3')

		cy.contains('Id: 1')
		cy.contains('Nome: Pedro Schneider')
		cy.contains('Profissão: Desenvolvedor')
	})
})