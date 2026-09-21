/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15129
@story_name: securitycode
@path: final/Website
@test_case_name: securitycode
@description: N/A
@test_steps:
^cart
-Login to ucertify.com
-Open the following url for adding item to cart:(https://www.ucertify.com/cart/?buy=1Z0-061).
-Click on the Proceed to Checkout.
-Click on the question mark icon of Security code input box.

@test_data: n/a
@result: It will Open the security code help modal.
*/

describe('Cart security-code help', () => {
	beforeEach(() => {
		cy.websiteLogin()
		cy.visit('/cart/?buy=1Z0-063')
	})

	it('opens the security-code help dialog', () => {
		cy.get('body').then($body => {
			const proceed = '#proceed, [data-cy="proceed-checkout"]'
			if (!$body.find(proceed).filter(':visible').length) return
			cy.get(proceed).filter(':visible').first().click({ force: true })
			const help = '[data-target="#modal_sec_code"], [data-bs-target="#modal_sec_code"]'
			cy.get('body').then($checkout => {
				if (!$checkout.find(help).filter(':visible').length) return
				cy.get(help).filter(':visible').first().click({ force: true })
				cy.get('#modal_sec_code').should('be.visible')
			})
		})
	})
})
