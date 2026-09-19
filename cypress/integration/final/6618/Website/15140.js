/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15140
@story_name: cybersecurity
@path: final/Website
@test_case_name: cybersecurity
@description: N/A
@test_steps:
^cybersecurity page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/courses/cybersecurity.html)

@test_data: n/a
@result: It will open the cybersecurity page
*/
describe('current CyberSecurity catalog', () => {
	beforeEach(() => {
		cy.websiteLogin()
		cy.visit('/')
	})

	it('shows the CyberSecurity course section', () => {
		cy.contains('button, [role="tab"]', /^\s*CyberSecurity\s*$/i, {
			timeout: 30000,
		})
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.contains('h2, [role="tab"]', /^\s*CyberSecurity\s*$/i).should(
			'be.visible'
		)
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
