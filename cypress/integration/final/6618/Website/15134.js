/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15134
@story_name: vendors_list
@path: final/Website
@test_case_name: vendors_list
@description: N/A
@test_steps:

^courses
-Login to ucertify.com
-Open the following url:(https://www.ucertify.com/courses/?func=security&lookup=selected_course)


^test case of shows vendors list
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/?host=pearson.ucertify.com
- click on any tab for here click on microsoft tab
- vendor list page will be shown.

@test_data: n/a
@result: It will Open the vendors list page.
*/

describe('Vendor pages', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the selected-course vendor list', () => {
		cy.visit('/?func=security&lookup=selected_course')
		cy.get('body').should('be.visible').and('not.be.empty')
	})

	it('opens the Pearson vendor context', () => {
		cy.visit('/?host=pearson.ucertify.com')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
