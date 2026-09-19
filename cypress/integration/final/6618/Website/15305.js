/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 
@story_name: career content writer
@path: final/Dump_Test_Automation
@test_case_name: career content writer
@description : career form for content writer

^test career form for content writer
- shows career form for content writer

^test case of career form for content writer
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/
- fo to career link in footer
- click on Technical writer tab in career page  
- career form for Technical writer will be shown

@test_data: Login credential
@result: career form for Technical writer will be shown
*/

describe('career form for content quality assurance', () => {
	beforeEach(() => {
		cy.websiteLogin()
		cy.visit('/about/career.html')
	})

	it('opens the current content application form', () => {
		cy.contains('a', /^\s*Explore Opportunities\s*$/i, {
			timeout: 30000,
		}).click({ force: true })
		cy.contains('button', /^\s*Content QA\s*$/i, { timeout: 30000 })
			.filter(':visible')
			.click({ force: true })
		cy.contains('h2', /^\s*Apply Now!\s*$/i).should('be.visible')
		cy.contains('button', /^\s*Submit Application\s*$/i).should('be.visible')
	})
})
