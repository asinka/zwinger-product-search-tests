const searchCases = [
    {
        checkName: 'description with more than 200 symbols',
        searchString: "Black cocktail dress for many occasions. \
            The feminine and figure accentuating fit lets you \
            stand out in a flattering way. Lorem ipsum dolor \
            sit amet, consetetur sadipscing elitr, sed diam \
            nonumy eirmod tempor invidunt ut labore et dolore \
            magna aliquyam erat, sed diam voluptua.",
        productName: 'Dress'
    },
    {
        checkName: 'keyword',
        searchString: 'on-ear',
        productName: 'Headphones'
    },
    {
        checkName: 'essential features',
        searchString: 'Contains sugar',
        productName: 'Homemade Cherry Jam'
    }
]

describe('Search product by other fields', () => {
    beforeEach(() => {
        cy.openShop()
    })
    searchCases.forEach((searchCase) => {
        it(`Search product by ${searchCase.checkName}`, () => {
            cy.get('.search-form-field').type(`${searchCase.searchString}{enter}`)
    
            cy.get('.search-filter-tags')
                .should('be.visible')
            cy.get('.product-list')
                .children('.product-item') // here I check that app found smthng
                .first()
                .contains(searchCase.productName) // here I can see what actually founded
        })
    });
})