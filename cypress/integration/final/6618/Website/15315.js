/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15315
@story_name: execution rating report
@path: cypress\integration\final\Dump_Test_Automation\pe-video_thumb.js
@test_case_name: pe-video_thumb.js
@description : Thumbnail of video in product page

^test Thumbnail of video in product page
- shows Thumbnail of video in product page

^test case of Thumbnail of video in product page
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/
- go to https://www.jigyaasa.info/p/ciw-user-interface-designer.html
- Thumbnail of video in product page will be shown

@test_data: Login credential
@result: Thumbnail of video in product page will be shown
*/

describe('CIW product page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/p/ciw-user-interface-designer-1d0-621.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/p/ciw-user-interface-designer-1d0-621.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
