/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15194
@story_name: Homepage
@path: final/Website
@test_case_name: Homepage
@description: N/A
@test_steps:
^test the browse title
-visit the website
-click on Browse Title
-mouseover on each component as 'adobe'

@test_data: n/a
@result: home page open
*/

describe('Catalog categories', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current course catalog', () => {
		cy.visit('/courses')
		cy.location('pathname', { timeout: 30000 }).should('include', '/courses')
		cy.get('body').should('be.visible').and('not.be.empty')
		cy.contains('body', /course|catalog/i).should('be.visible')
	})
})
