/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: N/A
@story_id: 15097
@story_name: ebook-tags_SNT
@path: final/Dump_Test_Automation
@test_case_name: ebook-tags_SNT.js
@description: SNT tag page
@test_steps: 
^test case of About page in snt tag
-Visit to website
-Login to ucertify.com
-Visit the vmadmin
-go down the page and click on the "About Us" option.
-visit the ebook tags page. https://www.jigyaasa.info/about/index.php?page=ebook-tags
@test_data: N/A
@result: Successfully open the SNT Tag Page
*/

describe('About page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current About Us page', () => {
		cy.visit('/about/about.html')
		cy.location('pathname').should('eq', '/about/about.html')
		cy.contains('h1, h2', /About uCertify/i, { timeout: 30000 }).should('be.visible')
	})
})
