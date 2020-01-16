describe('Aula 7', () => {
	it('Interagindo com Aula 7', function () {
		cy.visit('aula7')

		cy
            .get('button')
            .eq(0)
            .should('have.class', 'btn-sm')

        cy
			.get('button')
            .eq(1)
            .should('not.have.class', 'btn-lg')

        cy.screenshot()
	})
})