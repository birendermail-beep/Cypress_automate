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

const SECURITY_PRODUCT_PATH = '/p/?course_configuration=SY0-701.AE1'

function visit(path = '') {
	cy.fixture('global').then(({ url }) => {
		cy.visit(`${url}${path}`)
	})
}

function currencyToCents(value) {
	return Math.round(Number.parseFloat(value.replace(/[^\d.-]/g, '')) * 100)
}

describe('Cart area', () => {
	beforeEach(() => {
		visit()
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

	it('keeps the correct INR total through checkout', () => {
		visit(SECURITY_PRODUCT_PATH)

		cy.contains('button', 'Add to Cart').filter(':visible').first().click()
		cy.contains('[role="dialog"], .modal', 'Successfully added to cart')
			.should('be.visible')
			.within(() => {
				cy.get('.atc-addon-item[data-type="voucher"]')
					.should('be.visible')
					.and('contain.text', 'CompTIA Security+ Exam Voucher')
					.click()
				cy.contains('a', 'View Cart & Checkout').should('be.visible').click()
			})

		cy.location('pathname').should('eq', '/cart/')
		cy.get('.cart_product').should('have.length', 1)
		cy.get('input[name^="quantity["]').should('have.value', '1')
		cy.contains('.cart_product', 'CompTIA Security+ Exam Voucher').should(
			'be.visible'
		)
		cy.get('.amount_per_qty')
			.first()
			.invoke('text')
			.then(coursePrice => {
				cy.get('[id^="exam_"].addintotal')
					.first()
					.should('be.visible')
					.invoke('text')
					.then(voucherPrice => {
						const expectedTotal =
							currencyToCents(coursePrice) + currencyToCents(voucherPrice)

						cy.get('#colTotalAmt').should($total => {
							const displayedTotal = currencyToCents($total.text())

							expect(
								displayedTotal,
								'checkout total equals course price plus exam voucher price'
							).to.equal(expectedTotal)
						})
					})
			})

		cy.get('a[href*="/p/catalog.html"]:visible')
			.should('contain.text', 'Explore More Courses')
			.click()
		cy.location('pathname').should('eq', '/p/catalog.html')
		cy.get('a[href*="/p/?course_configuration="]')
			.filter(':visible')
			.first()
			.should('be.visible')
			.click()
		cy.location('search').should('include', 'course_configuration=')
		cy.contains('button', 'Add to Cart').filter(':visible').first().click()
		cy.contains('[role="dialog"], .modal', 'Successfully added to cart')
			.should('be.visible')
			.within(() => {
				cy.contains('a', 'View Cart & Checkout').should('be.visible').click()
			})

		cy.location('pathname').should('eq', '/cart/')
		cy.get('.cart_product').should('have.length', 2)
		cy.get('input[name^="quantity["]')
			.should('have.length', 2)
			.each($quantity => {
				expect($quantity).to.have.value('1')
			})
		cy.get('[id^="exam_"].addintotal').should('have.length', 1)
		cy.get('.amount_per_qty').then($coursePrices => {
			const coursesTotal = [...$coursePrices].reduce(
				(total, price) => total + currencyToCents(price.textContent),
				0
			)

			cy.get('[id^="exam_"].addintotal')
				.invoke('text')
				.then(voucherPrice => {
					cy.get('#colTotalAmt').should($total => {
						expect(
							currencyToCents($total.text()),
							'cart total equals both courses plus one exam voucher'
						).to.equal(coursesTotal + currencyToCents(voucherPrice))
					})
				})
		})

		cy.get('#colTotalAmt')
			.invoke('text')
			.then(usdTotal => {
				cy.get('.discount_panel .dropdown-toggle').click()
				cy.contains('.dropdown-item', 'Indian Rupees')
					.should('be.visible')
					.invoke('attr', 'href')
					.then(currencyAction => {
						expect(currencyAction).to.match(/'INR','[\d.]+'/)
						const exchangeRate = Number.parseFloat(
							currencyAction.match(/'INR','([\d.]+)'/)[1]
						)
						const expectedInrTotal = Math.round(
							currencyToCents(usdTotal) * exchangeRate
						)

						cy.contains('.dropdown-item', 'Indian Rupees').click()
						cy.get('.discount_panel .currency').should('contain.text', 'INR')
						cy.get('#colTotalAmt')
							.should($total => {
								const displayedInrTotal = currencyToCents($total.text())

								expect(
									Math.abs(displayedInrTotal - expectedInrTotal),
									'INR conversion differs by no more than one paisa due to exchange-rate rounding'
								).to.be.at.most(1)
							})
							.invoke('text')
							.then(inrTotal => {
								cy.wrap(inrTotal.trim()).as('cartInrTotal')
							})
					})
			})

		cy.get('.amount_per_qty').then($inrCoursePrices => {
			const inrCoursesTotal = [...$inrCoursePrices].reduce(
				(total, price) => total + currencyToCents(price.textContent),
				0
			)

			cy.get('[id^="exam_"].addintotal')
				.invoke('text')
				.then(inrVoucherPrice => {
					const expectedInrTotal =
						inrCoursesTotal + currencyToCents(inrVoucherPrice)

					cy.get('#colTotalAmt').should($total => {
						expect(
							currencyToCents($total.text()),
							'INR total equals both converted course prices plus the converted voucher price'
						).to.equal(expectedInrTotal)
					})
				})
		})

		cy.fixture('global').then(({ auditor_email }) => {
			cy.get('#email').clear().type(auditor_email[0])
			cy.get('#confirm_email').clear().type(auditor_email[0])
		})
		cy.get('#proceed').should('be.visible').and('be.enabled').click()
		cy.get('#proceed').should('not.exist')

		cy.get('@cartInrTotal').then(cartInrTotal => {
			cy.get('body').should($body => {
				const checkoutText = $body.text()

				expect(checkoutText).to.include(cartInrTotal)
				expect(checkoutText).to.match(/INR|₹/)
			})
		})
	})
})
