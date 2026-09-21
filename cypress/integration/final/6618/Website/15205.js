/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: N/A
@story_id: 15205
@story_name: pe-healthcheck
@path: final/Dump_Test_Automation
@test_case_name: pe-healthcheck.js
@description: 
@test_steps: 
^Helth check page
-Click on this link: https://www.jigyaasa.info/healthcheck.php
-Successfully open the helthcheck page.

@test_data: n/a

@result: helth check page will be open
*/

describe('Health check page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/healthcheck.php')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/healthcheck.php')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
