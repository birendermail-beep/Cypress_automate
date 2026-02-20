/*
@author: irfan ahmad
@master_project_id: 6621
@phase_id: 10868
@story_id: 10851
@story_name: Searching & Filtering Videos
@path: final\6621
@test_case_name: Searching & Filtering Videos.js
@description:n/a
@test_steps:
    ^searching and filtering 
    -Go to My projects and and go to author area and load the course
    -Now go to (url + /utils/generate_video_image.php)
    -After the videos are loaded then trying searching and filtering.
    -Result will be shown on the basis of selection

    ^Checking the info of the video
    -Go to My projects and and go to author area and load the course    
    -Now go to (url + /utils/generate_video_image.php)
    -In the videos grid or table check the information about the video like Guid, Video Type, Thumbnail, Title, Video Source, Duration, VTT availablity.
    -Details will be visible

@test_data: n/a        
@result: Search result visible.
 */

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Video playlist generate", function() {
    it('Generate Video playlist filter', function() {
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
            cy.wait(3000);
            cy.get('.filter_by_select > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click();
            cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('Properties{enter}');
        })
    })
})