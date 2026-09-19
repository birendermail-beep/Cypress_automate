/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@Story_Id: 15081
@story_name: career_page
@path: final/Dump_Test_Automation
@Test_Case_Name: career_page.js
@description: Go to the about page and open the hiring page
@test_steps: 
^Test case of hiring page
- visit on website
- visit on this click "/about/?page=technical_writer"
@test_data: N/A
@result: - Successfully open the Hiring page
*/

describe('current content career opportunity', () => {
	beforeEach(() => {
		cy.websiteLogin()
		cy.visit('/about/career.html')
	})

	it('opens the Content QA application form', () => {
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
