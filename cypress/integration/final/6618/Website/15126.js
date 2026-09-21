/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15126
@story_name: feature_new.js
@path: final/Dump_Test_Automation
@Test_Case_Name: feature_new.js
@description: open home page and go to the features page
@test_steps: 
^Test case of feature new pag
- visit on website
- Click on the "?" icon.
- Click the "Features Options".
- Successfully open the features page.
- After that click on this link '/features/index.php?manual_type='
@test_data: N/A
@result:
- Successfully open the features page
*/

describe('Features page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/features/index.php?manual_type=')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/features/index.php')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
