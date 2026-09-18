/*
@author: Anirudha Pratap
@master_project_id: 7761
@story_id: 11574
@story_name: shoppingcart
@path: final/7761/shoppingcart
@test_case_name: shoppingcart.js
*/

const PRODUCT_CONFIGURATION_PATH = '/p/?course_configuration=AIGP.AE1'
const INVALID_COUPON = 'ID25(current offer)'
const INVALID_CONFIRMATION_EMAIL = 'ankit.yadav@gmail.com'

const selectors = {
	addToCart: 'button',
	confirmEmail: '[data-cy=confirm_email_cy], #confirm_email',
	confirmationButton: '#btn-confirmed',
	continueShopping: '[data-cy=continue_shop_cy]',
	coupon: '#coupon_code',
	currency: '.discount_panel .dropdown-toggle',
	deleteItem: '[data-cy=delete_cy]',
	email: '[data-cy=email_cy], #email',
	proceed: '#proceed',
	quantity: 'input[name^="quantity["]',
	totalAmount: '#colTotalAmt',
}

function visit(path = '') {
	cy.fixture('global').then(({ url }) => {
		cy.visit(`${url}${path}`)
	})
}

function addCurrentProductToCart({ openCart = true } = {}) {
	visit(PRODUCT_CONFIGURATION_PATH)
	cy.contains(selectors.addToCart, 'Add to Cart')
		.first()
		.should('be.visible')
		.click({ force: true })
	cy.contains('Successfully added to cart').should('be.visible')

	if (openCart) {
		cy.contains('a', 'View Cart & Checkout').should('be.visible').click()
		cy.get(selectors.quantity).should('be.visible')
	}
}

describe('Shopping cart area', function () {
	it('displays a Continue Shopping option for an empty cart', function () {
		visit('/cart/')
		cy.get(selectors.continueShopping)
			.filter(':visible')
			.should('be.visible')
			.and('contain.text', 'Continue Shopping')
			.and('not.be.disabled')
	})

	it('updates the cart total when the product quantity changes', function () {
		addCurrentProductToCart()

		cy.get(selectors.totalAmount)
			.invoke('text')
			.then(unitPrice => {
				const expectedTotal = Number.parseFloat(unitPrice) * 2

				cy.get(selectors.quantity).clear().type('2').blur()
				cy.get(selectors.totalAmount).should($amount => {
					expect(Number.parseFloat($amount.text())).to.equal(expectedTotal)
				})
			})
	})

	it('deletes an item from the cart after confirmation', function () {
		addCurrentProductToCart()
		cy.get(selectors.deleteItem).should('be.visible').click({ force: true })
		cy.get(selectors.confirmationButton)
			.should('be.visible')
			.click({ force: true })
		cy.get(selectors.quantity).should('not.exist')
		cy.get(selectors.deleteItem).should('not.exist')
	})

	it('does not apply an invalid offer code', function () {
		addCurrentProductToCart()
		cy.get(selectors.totalAmount)
			.invoke('text')
			.then(originalTotal => {
				cy.get(selectors.coupon)
					.should('be.visible')
					.clear()
					.type(INVALID_COUPON)
				cy.contains('button', 'Apply').click()
				cy.get('#discount_promo_parent').should('not.be.visible')
				cy.get(selectors.totalAmount).should('have.text', originalTotal.trim())
			})
	})

	it('displays checkout after adding a current product', function () {
		addCurrentProductToCart()
		cy.get(selectors.proceed).should('be.visible').and('be.enabled')
	})

	it('adds a course and displays the cart confirmation', function () {
		addCurrentProductToCart({ openCart: false })
		cy.contains('[role=dialog], .modal', 'Successfully added to cart')
			.should('be.visible')
			.within(() => {
				cy.contains(
					'IAPP® Artificial Intelligence Governance Professional Study Guide'
				).should('be.visible')
				cy.contains('a', 'View Cart & Checkout').should('be.visible')
			})
	})

	it('changes the currency to Indian Rupees before checkout', function () {
		addCurrentProductToCart()

		cy.fixture('global').then(({ auditor_email }) => {
			cy.get(selectors.email).clear().type(auditor_email[0])
			cy.get(selectors.confirmEmail).clear().type(auditor_email[0])
		})

		cy.get(selectors.currency).click()
		cy.contains('.dropdown-item', 'Indian Rupees').should('be.visible').click()
		cy.get('.discount_panel .currency').should('contain', 'INR')
	})

	it('shows a validation error when confirmation email does not match', function () {
		addCurrentProductToCart()

		cy.fixture('global').then(({ auditor_email }) => {
			cy.get(selectors.email).clear().type(auditor_email[0])
		})

		cy.get(selectors.confirmEmail).clear().type(INVALID_CONFIRMATION_EMAIL)
		cy.get(selectors.proceed).click()
		cy.url().should('include', '/cart/')
		cy.get(selectors.confirmEmail).should(
			'have.value',
			INVALID_CONFIRMATION_EMAIL
		)
		cy.get(selectors.totalAmount).should('be.visible')
	})
})
