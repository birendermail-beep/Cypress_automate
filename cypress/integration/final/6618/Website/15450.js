/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15450
@story_name: certification page
@path: final/6618/Website
@test_case_name: certification page
@description:N/A
@test_steps: 

^certification page
-Visit to https://certification-partners.ucertify.com
-Login to website
-click on homepage

@test_data: n/a
@result: home page footer open
*/

describe('Certification Partners portal', () => {
	it('opens the portal', () => {
		cy.visit('https://certification-partners.ucertify.com')
		cy.location('hostname', { timeout: 30000 }).should('include', 'certification-partners.ucertify.com')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
