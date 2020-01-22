describe('Aula 9', () => {
	it('Interagindo com Aula 9', function () {
		cy.visit('aula9')

		cy
            .get('ul > li:eq(0)')
            .contains('Alícia Santos A ...')

        cy
            .get('ul > li:eq(2)')
            .contains('Rebeca Martins')

        cy.screenshot()
	})
})