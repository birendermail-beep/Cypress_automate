/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@Story_Id: 15082
@story_name: certification_new
@path: final/Dump_Test_Automation
@Test_Case_Name: certification_new.js
@description: Go to the certification home page
@test_steps: 
^Test case of is eval on search
- visit on the website page
- Successfully open the home page.
- Scroll the page and go to tha footer part.
- Click on the "Certifications" option.
- After that open the "Our Certification" page.
- Click on the any course.
- open the particular page according to course.
- After that click on the "Certification" tab.
- Successfully open the certificaton area.
@test_data: Vendor = ORACLE 
@result:Successfully open the certifications page
*/

describe('Oracle certification page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current Oracle certification page', () => {
		cy.visit('/p/Oracle.html')
		cy.get('body').should('be.visible').and('not.be.empty')
		cy.contains('body', /Oracle/i, { timeout: 30000 }).should('be.visible')
	})
})
