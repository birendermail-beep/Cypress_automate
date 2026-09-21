/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15096
@story_name: download_doc
@path: final/Dump_Test_Automation
@Test_Case_Name: download_doc.js
@description: 
@test_steps: 
^Test case of download_doc.js
-Click on this link: https://www.jigyaasa.info/courses/download_new.php
- Open download page.
- Go to the course name and select any courses.
- After that select the course."

@test_data: N/A

@result: Course will be downlod in doc format
*/

describe('Course download', () => {
	beforeEach(() => {
		cy.websiteLogin()
		cy.visit('/courses/download_new.php')
		cy.get('#course', { timeout: 30000 }).should('be.visible')
	})

	it('exports the selected course as DOC', () => {
		cy.get('#course option').filter((index, option) => Boolean(option.value)).first()
			.invoke('val').then(value => cy.get('#course').select(value, { force: true }))
		cy.get('#format').select('DOC', { force: true })
		cy.contains('button', /^Export$/i).should('be.visible').click({ force: true })
	})
})
