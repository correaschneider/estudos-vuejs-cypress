describe('Aula 10', () => {
	it('Interagindo com Aula 10', function () {
		cy.visit('aula10')

		cy
            .window()
            .then(window => {
                window.app.name = 'Taís Pereira Santos Freitas'
                window.app.firstName = 'Rebeca'
                window.app.lastName = 'Martins'
            })

        cy
            .get('.name')
            .contains('Taís Pereira Santos Freitas')

        cy
            .get('.nameUpper')
            .contains('TAÍS PEREIRA SANTOS FREITAS')

        cy
            .get('.fullName')
            .contains('Rebeca Martins')

        cy.screenshot()
	})
})