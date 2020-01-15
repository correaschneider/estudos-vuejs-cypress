describe('Aula 1', () => {
	it('Interagindo com Aula 1', function () {
		cy.visit('aula1')

		cy.contains('Aula 01 - Vuejs do jeito ninja!')
	})
})