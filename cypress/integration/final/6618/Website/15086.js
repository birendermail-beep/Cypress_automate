/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_Id: 15086
@story_name: chief_technical_officer
@path: final/Dump_Test_Automation
@Test_Case_Name: chief_technical_officer.js
@description: Go to the about page and open the chief technical officer
@test_steps: 
^Test case of hiring page
- visit on website
- visit on this click "/about/index.php?page=chief_technical_officer"
@test_data: N/A
@result: 
- Successfully open the chief technical officer page
*/
describe('current senior developer opportunity', () => {
	beforeEach(() => {
		cy.websiteLogin()
		cy.visit('/about/career.html')
	})

	it('opens a current senior developer application form', () => {
		cy.contains('a', /^\s*Explore Opportunities\s*$/i, {
			timeout: 30000,
		}).click({ force: true })
		cy.contains('button', /^\s*Senior .* Developer\s*$/i, {
			timeout: 30000,
		})
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.contains('h2', /^\s*Apply Now!\s*$/i).should('be.visible')
		cy.contains('button', /^\s*Submit Application\s*$/i).should('be.visible')
	})
})
