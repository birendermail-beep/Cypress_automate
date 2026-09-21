/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: n/a
@story_id: 15127
@story_name: features_faqs
@path: final/Dump_Test_Automation
@test_case_name: features_faqs.js
@description: Go to help options and go to to features options.
@test_steps: 
^test case of request demo
-Visit to website.
-Login to ucertify.com.
-Click on the "?" option in home page.
-Select the "Help" option.
-Sucessfully open features page.
@test_data: n/a
@result: Successfully open the features page
*/

describe('Help and support page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens current support content', () => {
		cy.visit('/support.php')
		cy.location('pathname').should('eq', '/support.php')
		cy.contains('body', /help|support/i, { timeout: 30000 }).should('be.visible')
	})
})
