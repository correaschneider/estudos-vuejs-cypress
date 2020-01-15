describe('Aula 5', () => {
	it('Interagindo com Aula 5', function () {
		cy.visit('aula5/')

		cy
			.get('#name')
			.type('Carolina Fernandes Oliveira')

		cy
			.get('#phone')
			.type('091977950117')

		cy
			.get('[name=news]')
			.check(['Sim'])

		cy
			.get('[name=interest]')
			.check(['Futebol', 'Basquetebol'])

		cy
			.get('#know')
			.select('Google')

		cy.screenshot()

		cy
			.get('#name')
			.should('have.value', 'Carolina Fernandes Oliveira')

		cy
			.get('#phone')
			.should('have.value', '091977950117')

		cy
			.get('#news-sim')
			.should('be.checked')

		cy
			.get('[name=interest][value=Futebol],[name=interest][value=Basquetebol]')
			.should('be.checked')

		cy
			.get('#know')
			.should('have.value', 'Google')
	})
})