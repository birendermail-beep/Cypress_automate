/*
@author: Anirudha Pratap
@master_project_id: 7761
@story_id: 11574
@story_name: shoppingcart
@path: final/7761/shoppingcart
@test_case_name: shoppingcart.js
*/

import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
	InstructorPage,
} from '../../../../page-objects/pages/index'

const COURSE_CODE = '1Z0-063'
const DIRECT_CART_COURSE = '312-49-v8'
const ADOBE_PRODUCT_PATH = '/exams/Adobe/indesign-2017.html'
const VALID_COUPON = 'ID25(current offer)'
const INVALID_CONFIRMATION_EMAIL = 'ankit.yadav@gmail.com'

const selectors = {
	addToCart: '#continue',
	buyButton: '#buy_btn',
	confirmEmail: '[data-cy=confirm_email_cy], #confirm_email',
	confirmationButton: '#btn-confirmed',
	continueShopping: '[data-cy=continue_shop_cy]',
	coupon: '#coupon_code',
	currency: '#currency',
	deleteItem: '[data-cy=delete_cy]',
	email: '[data-cy=email_cy], #email',
	price: '[data-cy=price_cy]',
	proceed: '#proceed',
	proceedToCheckout: '#proceed_checkout',
	quantity: '[data-cy=quantity_cy]',
	totalAmount: '[id^=amount_][id$=_0]',
	totalCartItems: '#total_cart_item',
}

function visit(path = '') {
	cy.fixture('global').then(({ url }) => {
		cy.visit(`${url}${path}`)
	})
}

function visitCartWithCourse(courseCode = COURSE_CODE) {
	visit(`/cart/?buy=${courseCode}`)
	cy.get(selectors.quantity).should('be.visible')
}

function continueShopping() {
	InstructorPage.visitShopping()
	cy.get(selectors.continueShopping)
		.should('be.visible')
		.and('contain', 'Continue Shopping')
		.click({ force: true })
}

function openCourseFromCatalog() {
	continueShopping()
	cy.contains(COURSE_CODE).should('be.visible').click({ force: true })
}

function addAdobeProductToCart() {
	visit(ADOBE_PRODUCT_PATH)
	cy.get('.btn-group > .btn-primary')
		.should('be.visible')
		.click({ force: true })
	cy.get(selectors.addToCart)
		.should('be.visible')
		.and('contain', 'Add to Cart')
		.click({ force: true })
	cy.contains('View Cart').should('be.visible').click({ force: true })
	cy.get(selectors.email).should('be.visible')
}

describe('Shopping cart area', function () {
	beforeEach(function () {
		visit()
		Navbar.clickOnLogin()
		LoginPage.loginPage(login_username, login_password)
	})

	it('opens the product catalog from an empty cart', function () {
		continueShopping()
		cy.url().should('include', '/courses')
	})

	it('updates the cart total when the product quantity changes', function () {
		visitCartWithCourse()

		cy.get(selectors.price)
			.invoke('val')
			.then(unitPrice => {
				const expectedTotal = Number.parseFloat(unitPrice) * 2

				cy.get(selectors.quantity).clear().type('2').blur()
				cy.get(selectors.totalAmount).should($amount => {
					expect(Number.parseFloat($amount.val())).to.equal(expectedTotal)
				})
			})
	})

	it('deletes an item from the cart after confirmation', function () {
		visitCartWithCourse()
		cy.get(selectors.deleteItem).should('be.visible').click({ force: true })
		cy.get(selectors.confirmationButton)
			.should('be.visible')
			.click({ force: true })
		cy.get(selectors.continueShopping).should('be.visible')
	})

	it('applies an offer and proceeds to checkout', function () {
		visitCartWithCourse()
		cy.get(selectors.coupon).should('be.visible').clear().type(VALID_COUPON)
		cy.get(selectors.email).clear().type(login_username)
		cy.get(selectors.confirmEmail).clear().type(login_username)
		cy.get(selectors.currency).click({ force: true })
		cy.contains('Indian Rupees').should('be.visible').click({ force: true })
		cy.get(selectors.proceed).should('be.enabled').click({ force: true })
	})

	it('proceeds from a course page to checkout', function () {
		openCourseFromCatalog()
		cy.get(selectors.buyButton).should('be.visible').click()
		cy.get(selectors.proceedToCheckout)
			.should('be.visible')
			.click({ force: true })
	})

	it('adds another course and displays the cart item count', function () {
		openCourseFromCatalog()
		cy.get(selectors.buyButton).should('be.visible').click()
		cy.get(selectors.addToCart).should('be.visible').click({ force: true })
		cy.get(selectors.totalCartItems).should('be.visible')
	})

	it('deletes a directly added cart item', function () {
		visitCartWithCourse(DIRECT_CART_COURSE)
		cy.get(selectors.deleteItem).should('be.visible').click({ force: true })
		cy.get(selectors.confirmationButton)
			.should('be.visible')
			.click({ force: true })
		cy.get(selectors.continueShopping).should('be.visible')
	})

	it('changes the currency to Indian Rupees before checkout', function () {
		addAdobeProductToCart()

		cy.fixture('global').then(({ auditor_email }) => {
			cy.get(selectors.email).clear().type(auditor_email[0])
			cy.get(selectors.confirmEmail).clear().type(auditor_email[0])
		})

		cy.get(selectors.currency).click()
		cy.contains('Indian Rupees').should('be.visible').click()
		cy.get('#colNet > .currency').should('contain', 'INR')
		cy.get(selectors.proceed).should('be.enabled').click()
		cy.get('#colNet').should('contain', 'Net Amount (INR)')
	})

	it('shows a validation error when confirmation email does not match', function () {
		addAdobeProductToCart()

		cy.fixture('global').then(({ auditor_email }) => {
			cy.get(selectors.email).clear().type(auditor_email[0])
		})

		cy.get(selectors.confirmEmail).clear().type(INVALID_CONFIRMATION_EMAIL)
		cy.get(selectors.proceed).click()
		cy.get(selectors.confirmEmail).next().should('be.visible')
	})
})
