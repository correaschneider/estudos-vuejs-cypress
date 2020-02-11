describe('Aula 16', () => {
	it('Interagindo com Aula 16', function () {
		cy.visit('aula16')

		cy
			.get('.card-title:eq(1)')
			.contains('Title 2')

		cy.screenshot()
	})
})