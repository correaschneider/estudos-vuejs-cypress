describe('Aula 15', () => {
	it('Interagindo com Aula 15', function () {
		cy.visit('aula15')

		cy
			.get('#title')
			.type('Teste 2')

		cy
			.get('button.btn-primary')
			.click()

		cy
			.get('.list-group .list-group-item:eq(2)')
			.contains('Teste 2')

		cy.screenshot()
	})
})