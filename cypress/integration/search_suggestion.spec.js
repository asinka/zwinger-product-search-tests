describe('Search Product Suggestion Checks', () => {
    beforeEach(() => {
        cy.openShop()
    })
    it('Suggest Correct Product', () => {
        cy.get('.search-form-field').type('dress')

        cy.get('.search-form-suggestions', { timeout: 10000 })
            .contains('Black Cocktail Dress 1')
            .should('be.visible')
            .click()

        cy.get('.product-info-title')
            .contains('Black Cocktail Dress 1')
            .should('be.visible')
    })
})