describe('Aula 14', () => {
	it('Interagindo com Aula 14', function () {
		cy.visit('aula14')

		let text

		cy
			.get('.navbar-nav .nav-link:eq(0)')
			.click()

		cy
			.on('window:alert', (str) => {
				text = str
			})
			.then(() => {
				expect(text).to.equal('Home!')
			})

		cy.screenshot()
	})
})