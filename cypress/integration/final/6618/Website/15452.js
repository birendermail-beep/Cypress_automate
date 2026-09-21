/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15452
@story_name: seetec page
@path: final/6618/Website
@test_case_name: seetec page
@description:N/A
@test_steps: 

^seetec page page
-Visit to https://seetec.ucertify.com
-Login to website
-click on homepage

@test_data: n/a
@result: home page footer open
*/

describe('Seetec portal', () => {
	it('opens the portal', () => {
		cy.visit('https://seetec.ucertify.com')
		cy.location('hostname', { timeout: 30000 }).should('include', 'seetec.ucertify.com')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
