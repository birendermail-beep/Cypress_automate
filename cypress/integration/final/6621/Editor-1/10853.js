/*
@author: irfan ahmad
@master_project_id: 6621
@phase_id: 10868
@story_id: 10853
@story_name: Opening VTT
@path: final\6621
@test_case_name: Opening VTT.js
@description:n/a
@test_steps:
^Opening Content Guid 
-Go to My projects and and go to author area and load the course
-Now go to (url + /utils/generate_video_image.php)
-In the videos, click the guid shown in the  grid or in table format click title/guid
-Parent guid will be open in same tab.

^Updating the data after doing changes in content guid
-Go to My projects and and go to author area and load the course
-Now go to (url + /utils/generate_video_image.php)
-In the videos, click the guid shown in the  grid or in table format click title/guid
-Parent guid will be open in same tab.
-Now when exiting the editor a pop up will appear if there is any changes then click yes to update the page otherwise click no.

@test_data: n/a
@result: Vtt visible on the page.
 */

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Video playlist generate", function() {
    it('Generate Video playlist guid check', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitNative(data.url)
            cy.get('[course_code="03yAA"] [data-cy="open_course"]').click({ force: true })
            cy.wait(10000)

            EditorPage.visitNative(data.url)
            cy.get('[course_code="03yAA"] [data-cy="author"]').click({ force: true })

            cy.visit(data.url + '/utils/generate_video_image.php')
            cy.get('#video_array_tabs [aria-controls="videos_information"]').click()

            cy.get('#search_video').type('Testing from author', { force: true })
            cy.get('[data-guid="05zwq"]').contains('Testing from author').click({ force: true })
            cy.wait(3000);
            cy.get('#item_5 > .active_videos > .ibox-content > .mt-md > .float-left > .badge-info').contains('05zwq').click({force:true});
        })
    })
})