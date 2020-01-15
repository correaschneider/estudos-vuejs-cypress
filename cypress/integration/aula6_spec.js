describe('Aula 6', () => {
	it('Interagindo com Aula 6', function () {
		cy.visit('aula6')

		cy
			.get('img')
            .should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
	})
})