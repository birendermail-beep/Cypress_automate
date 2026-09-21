/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@story_id: 
@story_name: object_lab_item
@path: final/Dump_Test_Automation
@Test_Case_Name: object_lab_item.js
@description: Go to about page and open the live lab page
@test_steps: 
^Test case of live lab page
-visit the home area.
-Go to the nav bar and mouseover the "Technology" option in nav bar.
-After that click on the "Lab" option.
-Scroll down the page and go to the under Lab.
-Click on the "ObjectLab" option.
-Successfully open the objectLab page.

@test_data: n/a
@result: Successfully open the objectLab page
*/

describe('ScenarioSIM lab item', () => {
	beforeEach(() => cy.websiteLogin())

	it('provides a ScenarioSIM destination', () => {
		cy.visit('/products/labs.html')
		cy.contains('a', 'ScenarioSIM', { timeout: 30000 })
			.filter(':visible')
			.first()
			.should('have.attr', 'href')
	})
})
