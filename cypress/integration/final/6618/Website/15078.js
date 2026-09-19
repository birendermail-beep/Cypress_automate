/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@Story_Id: 15078
@story_name: btest
@path: final/Dump_Test_Automation
@Test_Case_Name: btest.js
@description: open image url
@test_steps: 
^Test case of is eval on search
- visit on the utils area
- visit on this link https://www.jigyaasa.info/utils/btest.php?action=test
- open the image url page
@test_data: N/A
@result: Successfully open the page
*/

import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

describe('Website', () => {
	it('Image url page will be open', () => {
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

		cy.visit('/utils/btest.php?action=test')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/utils/btest.php')
		cy.location('search').should('eq', '?action=test')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
