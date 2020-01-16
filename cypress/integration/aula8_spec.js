describe('Aula 8', () => {
	it('Interagindo com Aula 8', function () {
		cy.visit('aula8')

		cy
			.get('button')
			.click()

		cy.on('window:alert', (str) => {
			expect(str).to.equal('Enviado!')
		})
	})
})