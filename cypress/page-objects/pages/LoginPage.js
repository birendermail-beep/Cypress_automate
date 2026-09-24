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

			cy.get(
				'#email, input[type="email"], input[name="email"], input[placeholder="ENTER EMAIL"]',
				{ timeout: 30000 }
			)
				.filter(':visible')
				.first()
				.clear()
				.type(resolvedUsername, {
					log: false,
					parseSpecialCharSequences: false,
				})
				.should('have.value', resolvedUsername)
				.trigger('input')
				.trigger('change')
				.blur()
				.should($input => {
					expect($input[0].checkValidity(), 'email field validity').to.equal(true)
				})

			cy.get(
				'#password, input[type="password"], input[name="password"], input[placeholder="ENTER PASSWORD"]',
				{ timeout: 30000 }
			)
				.filter(':visible')
				.first()
				.clear()
				.type(resolvedPassword, {
					log: false,
					parseSpecialCharSequences: false,
				})

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
						.click({ force: true })
					return
				}

				cy.contains('button', /^\s*SIGN IN\s*$/i, { timeout: 30000 })
					.should('be.visible')
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
