/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: 
@story_id: 15207
@story_name: pe-menubar-cart_menu
@path: final/Dump_Test_Automation
@Test_Case_Name: pe-menubar-cart_menu.js
@description: 
@test_steps: 
^Show the icon shopping cart area
-Click on this link: https://www.jigyaasa.info/
- successfully show the icon cart area.

@test_data: N/A
@result: cart icon should be show
*/

describe('Cart area', () => {
	beforeEach(() => {
		cy.fixture('global').then(({ url }) => {
			cy.visit(url)
		})
	})

	it('displays the cart and opens the empty cart page', () => {
		cy.get('a[href*="/cart/"]')
			.filter(':visible')
			.first()
			.as('cartButton')
			.should('be.visible')
			.and('have.attr', 'href')
			.and('include', '/cart/')

		cy.get('@cartButton').click()

		cy.location('pathname').should('eq', '/cart/')
		cy.contains('h3', 'Your cart is empty').should('be.visible')
		cy.get('a[href*="/p/catalog.html"]:visible')
			.should('contain.text', 'Continue Shopping')
			.should('be.visible')
			.and('have.attr', 'href')
			.and('include', '/p/catalog.html')
	})
})
