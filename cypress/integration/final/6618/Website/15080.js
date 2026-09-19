/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15080
@story_name: caerer_application
@path: final/Dump_Test_Automation
@test_case_name: career_application.js
@description : career form for application developer

^test career form for application developer
- shows career form for application developer

^test case of career form for application developer
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/
- fo to career link in footer
- click on application developer tab in career page  
- career form for application developer will be shown

@test_data: Login credential

@result: career form for application developer will be shown
*/

import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

describe('career form for application developer', () => {
	it('shows the application form for application developer', () => {
		cy.visit('/')
		Navbar.clickOnLogin()
		LoginPage.loginPage(login_username, login_password)

		cy.contains('button, a', /^\s*Continue\s*$/i, { timeout: 30000 })
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.location('href', { timeout: 30000 }).should(
			'not.include',
			'func=welcome'
		)

		cy.scrollTo('bottom')
		cy.contains('a', /^\s*Careers\s*$/i, { timeout: 30000 })
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.location('href', { timeout: 30000 }).should('match', /career/i)
		cy.contains('a', /^\s*Explore Opportunities\s*$/i, {
			timeout: 30000,
		})
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.contains('button', /Developer\s*$/i, { timeout: 30000 })
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.contains('h2', /^\s*Apply Now!\s*$/i, { timeout: 30000 }).should(
			'be.visible'
		)
		cy.get('form:visible', { timeout: 30000 })
			.first()
			.should('be.visible')
			.and('not.be.empty')
			.within(() => {
				cy.get('input').filter(':visible').should('have.length.at.least', 2)
				cy.contains('button', /^\s*Submit Application\s*$/i).should(
					'be.visible'
				)
			})
	})
})
