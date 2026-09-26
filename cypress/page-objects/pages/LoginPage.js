import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
	static loginPage(username, password) {
		return cy.env([
			'USERNAME',
			'PASSWORD',
			'login_username',
			'login_password',
		]).then(environment => {
			const resolvedUsername = String(
				username ||
				environment.USERNAME ||
				environment.login_username ||
				''
			).replace(/[\s\u200B-\u200D\uFEFF]/g, '')
			const resolvedPassword = String(
				password ||
				environment.PASSWORD ||
				environment.login_password ||
				''
			)

			if (!resolvedUsername || !resolvedPassword) {
				throw new Error(
					'Missing Cypress login credentials. Set CYPRESS_USERNAME and CYPRESS_PASSWORD before starting Cypress.'
				)
			}

			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resolvedUsername)) {
				throw new Error(
					'CYPRESS_USERNAME must contain a valid email address.'
				)
			}

			cy.location('pathname', { timeout: 30000 }).should('include', 'login.php')

			const emailSelector =
				'#email, input[type="email"], input[name="email"], input[placeholder="ENTER EMAIL"]'
			const passwordSelector =
				'#password, input[type="password"], input[name="password"], input[placeholder="ENTER PASSWORD"]'

			// The login form replaces its inputs while rendering. Set values through
			// the native property setter, notify the framework, then re-query the DOM.
			// Retry against the replacement node if the value was not retained.
			const setStableInputValue = (selector, value, fieldName, attempt = 0) => {
				return cy.get(selector, { timeout: 30000 })
					.filter(':visible')
					.first()
					.should('be.enabled')
					.then($input => {
						const input = $input[0]
						const valueSetter = Object.getOwnPropertyDescriptor(
							window.HTMLInputElement.prototype,
							'value'
						).set

						input.focus()
						valueSetter.call(input, value)
						input.dispatchEvent(new Event('input', { bubbles: true }))
						input.dispatchEvent(new Event('change', { bubbles: true }))
						input.blur()
					})
					.then(() => cy.wait(300, { log: false }))
					.then(() =>
						cy.get(selector, { timeout: 30000 })
							.filter(':visible')
							.first()
							.then($input => {
								if ($input.val() === value) return
								if (attempt < 3) {
									return setStableInputValue(
										selector,
										value,
										fieldName,
										attempt + 1
									)
								}
								throw new Error(
									`${fieldName} input did not retain its value after the login form re-rendered.`
								)
							})
					)
			}

			setStableInputValue(emailSelector, resolvedUsername, 'Email')

			cy.get(emailSelector, { timeout: 30000 })
				.filter(':visible')
				.first()
				.should('have.value', resolvedUsername)
				.and($input => {
					expect($input[0].checkValidity(), 'email field validity').to.equal(true)
				})

			setStableInputValue(passwordSelector, resolvedPassword, 'Password')

			cy.get(passwordSelector, { timeout: 30000 })
				.filter(':visible')
				.first()
				.should('have.value', resolvedPassword)

			cy.get('body').then($body => {
				const submitSelector = [
					'#submit',
					'button[type="submit"]',
					'input[type="submit"]',
				].find(selector => $body.find(selector).filter(':visible').length)

				if (submitSelector) {
					cy.get(submitSelector)
						.filter(':visible')
						.first()
						.should('be.enabled')
						.click({ force: true })
					return
				}

				cy.contains('button', /^\s*SIGN IN\s*$/i, { timeout: 30000 })
					.should('be.visible')
					.and('be.enabled')
					.click({ force: true })
			})

			cy.location('pathname', { timeout: 30000 }).should(
				'not.include',
				'login.php'
			)
		})
	}

	static visitOnClick(selector) {
		cy.get(selector)
			.should('have.attr', 'href')
			.then(href => {
				cy.visit(href)
			})
	}

	static visitOnFooter(text) {
		cy.contains('a', text)
			.filter(':visible')
			.first()
			.should('have.attr', 'href')
			.then(href => {
				cy.visit(href)
			})
	}

	static clickOnCourseCat() {
		;[
			'IT / Computer Science',
			'Project Management',
			'Vocational Training',
			'Coding',
		].forEach(category => {
			cy.contains('a, button', category).click({ force: true })
		})
	}
}
