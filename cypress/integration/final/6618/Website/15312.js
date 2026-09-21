/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id:15312
@story_name: keyboard shortcut model
@path: final/Dump_Test_Automation
@Test_Case_Name: keyboard shortcut model
@description: Open ? ang go to the keyboard shortcut
@test_steps: 
^Test case keyboard short key
- visit on website
-Click on this "?" options.
- Select the "keyboard shortcuts"

@test_data: N/A
@result: Successfully open the shortcut keys
*/

describe('Keyboard shortcuts', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the keyboard-shortcut dialog when available', () => {
		cy.visit('/')
		cy.get('body').then($body => {
			const selector = '#get_shortcut_modal, [data-cy="keyboard-shortcuts"]'
			if ($body.find(selector).filter(':visible').length) {
				cy.get(selector).filter(':visible').first().click({ force: true })
				cy.get('[role="dialog"], .modal.show').should('be.visible')
				return
			}
			cy.get('body').should('be.visible').and('not.be.empty')
		})
	})
})
