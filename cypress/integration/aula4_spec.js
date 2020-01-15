context('Aula 4', () => {
  beforeEach(() => {
    cy.visit('aula4')
  })

  it('Interagindo com Aula 4', function () {
    let ul = cy
        .get('ul')

    ul
        .get('li:eq(0)')
        .contains('JavaScript')

    ul
        .get('li:eq(1)')
        .contains('PHP')

    ul
        .get('li:eq(2)')
        .contains('C#')

    ul
        .get('li:eq(3)')
        .contains('Java')

    ul
        .get('li:eq(4)')
        .contains('Python')
  })
})