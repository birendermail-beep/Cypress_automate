/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15454
@story_name: itp ucertify page
@path: final/6618/Website
@test_case_name: itp ucertify page
@description:N/A
@test_steps: 

^itp ucertify page
-Visit to https://itp.ucertify.com
-Login to website
-click on homepage

@test_data: n/a
@result: home page footer open
*/

describe('ITP portal', () => {
	it('opens the portal', () => {
		cy.visit('https://itp.ucertify.com')
		cy.location('hostname', { timeout: 30000 }).should('include', 'itp.ucertify.com')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
