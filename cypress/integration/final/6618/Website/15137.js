/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15137
@story_name: download_new
@path: final/Website
@test_case_name: download_new
@description: N/A
@test_steps:
^download
-Login to ucertify.com
-Open the following url:(https://www.ucertify.com/courses/download_new.php)
-Select the course:(101-400-complete:LPIC-1 Exam 1 - Linux Server Professional Certification V4.0  (Course & Labs)).
-Select PDF.
-Click on the Export button

^download1
-Login to ucertify.com
-Open the following url:(https://www.ucertify.com/courses/download_new.php)
-Select the course:(101-400-complete:LPIC-1 Exam 1 - Linux Server Professional Certification V4.0  (Course & Labs)).
-Select DOC.
-Click on the Export button

@test_data: n/a
@result: It will Open the download_new page.
*/

describe('Course download', () => {
	beforeEach(() => {
		cy.websiteLogin()
		cy.visit('/courses/download_new.php')
		cy.get('#course', { timeout: 30000 }).should('be.visible')
	})

	it('exports the selected course as PDF', () => {
		cy.get('#course option').filter((index, option) => Boolean(option.value)).first()
			.invoke('val').then(value => cy.get('#course').select(value, { force: true }))
		cy.get('#format').select('PDF', { force: true })
		cy.contains('button', /^Export$/i).should('be.visible').click({ force: true })
	})

	it('exports the selected course as DOC', () => {
		cy.get('#course option').filter((index, option) => Boolean(option.value)).first()
			.invoke('val').then(value => cy.get('#course').select(value, { force: true }))
		cy.get('#format').select('DOC', { force: true })
		cy.contains('button', /^Export$/i).should('be.visible').click({ force: true })
	})
})
