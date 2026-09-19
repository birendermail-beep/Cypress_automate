/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 
@story_name: career online sale
@path: final\Dump_Test_Automation\
@test_case_name: career online sale
@description : career form for online sale executive

^test career form for online sale executive
- shows career form for online sale executive

^test case of career form for online sale executive
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/
- fo to career link in footer
- click on Inside sale executive tab in career page  
- career form for online sale will be shown

@test_data: Login credential

@result: career form for online sale will be shown
*/

import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

describe('career form for sales associate', () => {
	it('opens the current sales application form', () => {
		cy.visit('/')
		Navbar.clickOnLogin()
		LoginPage.loginPage(login_username, login_password)
		Navbar.clickContinueOnWelcomePage()
		cy.visit('/about/career.html')

		cy.contains('a', /^\s*Explore Opportunities\s*$/i, {
			timeout: 30000,
		}).click({ force: true })
		cy.contains('button', /^\s*Sales Associate\s*$/i, { timeout: 30000 })
			.filter(':visible')
			.click({ force: true })
		cy.contains('h2', /^\s*Apply Now!\s*$/i).should('be.visible')
		cy.contains('button', /^\s*Submit Application\s*$/i).should('be.visible')
	})
})
