/*
@author: irfan ahmad
@master_project_id: 6621
@phase_id: 10868
@story_id: 10852
@story_name: Opening VTT
@path: final\6621
@test_case_name: Opening VTT.js
@description:n/a
@test_steps:
^Opening VTT 
-Go to My projects and and go to author area and load the course
-Now go to (url + /utils/generate_video_image.php)
-In the videos grid or table check the video which has vtt available icon.
-Now click on it the VTT will be open in new tab in the editor
        
@test_data: n/a
@result: Vtt visible on the page.
 */

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Opening VTT", function() {
    it('Generate Video playlist VTT check', function() {
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
            cy.get('#item_5 > .active_videos > .ibox-content > .mt-md > .float-right > .d-inline-block > a').
                should('have.attr','href')
                .then( (href)=>{
                    cy.visit(href)
                });
        })
    })
})