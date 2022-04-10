const searchCases = [
    {
        searchString: 'Decor!',
        productName: 'Decor'
    },
    {
        searchString: 'Armchair?',
        productName: 'Armchair'
    },
    {
        searchString: '(Calathea)',
        productName: 'Calathea'
    }
]

describe('Search product with special symbols', () => {
    beforeEach(() => {
        cy.openShop()
    })
    it(`Search product with special symbols`, () => {
        var specialSymbols = `~!@#$%^&*()-_=+[]\{}|;':",./<>?`
        cy.get('.search-form-field').type(`${specialSymbols}`, {
            parseSpecialCharSequences: false,
          }).type('{enter}')
    
        cy.contains(`Search results for "${specialSymbols}"`, { timeout: 10000 })
            .should('be.visible')
        cy.get('.search-no-result').should('be.visible')
        cy.get('.product-list').should('not.exist')
        
    });

    searchCases.forEach((searchCase) => {
        it(`Search product by product name with special symbol`, () => {
            cy.get('.search-form-field').type(`${searchCase.searchString}{enter}`)
    
            cy.get('.search-filter-tags')
                .should('be.visible')
            cy.get('.product-list')
                .children('.product-item')
                .first()
                .contains(searchCase.productName)
        })
    });
})