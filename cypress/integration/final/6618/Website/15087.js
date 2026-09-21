/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: N/A
@story_id: 15087
@story_name: Codelab
@path: final/Dump_Test_Automation
@test_case_name: Codelab.js
@description: Open the code labpage
@test_steps: 
^test case of codelab
-Visit to website
-Login to ucertify.com
-Visit the vmadmin
-Visit the codelab page
@test_data: N/A
@result: Successfully show codelab page
*/

describe('CodeLAB', () => {
	beforeEach(() => cy.websiteLogin())

	it('shows CodeLAB on the current labs page', () => {
		cy.visit('/products/labs.html')
		cy.contains('h3, a', 'CodeLAB', { timeout: 30000 }).should('be.visible')
	})
})
