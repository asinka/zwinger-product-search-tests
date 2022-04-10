const searchCases = [
    {
        checkName: 'exactly the same as presented', 
        word: 'Painting',
        productName: 'Painting'
    },
    {
        checkName: 'lower case', 
        word: 'dress',
        productName: 'Dress'
    },
    {
        checkName: 'upper case', 
        word: 'BUTTERFLY',
        productName: 'Butterfly'
    },
    {
        checkName: 'typo', 
        word: 'heedphones',
        productName: 'Headphones'
    },
    {
        checkName: 'not entire word', 
        word: 'pl',
        productName: 'Plant'
    },
    {
        checkName: 'extra spaces before word', 
        word: '  armchair',
        productName: 'Armchair'
    }
]

describe('Search product by name', () => {
    beforeEach(() => {
        cy.openShop()
    })
    searchCases.forEach((searchCase) => {
        it(`Search product by one word with ${searchCase.checkName}`, () => {
            cy.get('.search-form-field').type(`${searchCase.word}{enter}`)
    
            cy.get('.search-filter-tags')
                .should('be.visible')
            cy.get('.product-list')
                .children('.product-item')
                .first()
                .contains(searchCase.productName)
        })
    });

    it('Search product by two words', () => {
        cy.get('.search-form-field').type('dress black{enter}')

        cy.get('.search-filter-tags')
            .should('be.visible')
        cy.get('.product-list')
            .children('.product-item')
            .first()
            .contains('Dress')
            .contains('Black')
            .should('be.visible')
    })

    it('Search product by two words when only one is valid', () => {
        cy.get('.search-form-field').type('dress yellow{enter}')

        cy.get('.search-filter-tags')
            .should('be.visible')
        cy.get('.product-list')
            .children('.product-item')
            .first()
            .contains('Dress')
            .should('be.visible')
    })

    it('Search for something what`s not exists', () => {
        cy.get('.search-form-field').type('yellow')
        cy.get('.search-form-suggestions', { timeout: 10000 })
            .should('not.exist') // here I check that suggesting doesn't find anything
        cy.get('.search-form-field').type('{enter}')

        cy.contains('Search results for "yellow"')
            .should('be.visible')
        cy.get('.search-no-result').should('be.visible')
        cy.get('.product-list').should('not.exist')
    })

    it('Search from categories page (should work globally)', () => {
        cy.get('.navigation-desktop').within(() => {
            cy.contains('Category with less than 12 products').click()
          });
        cy.get('.search-form-field').type('Framed Butterfly Painting 2{enter}') //here I search from category where the item is not presented
        cy.get('.search-filter-tags')
            .should('be.visible')
            .contains('Framed Butterfly Painting 2')
        cy.get('.product-list')
            .children('.product-item')
            .first()
            .contains('Framed Butterfly Painting 2')
    })

    it('Fill the field by spaces', () => {
        cy.get('.navigation-desktop').within(() => {
            cy.contains('Category with less than 12 products').click()
          });
        cy.get('.search-form-field').type('     {enter}')
        cy.get('.home')
            .should('be.visible')
    })
})