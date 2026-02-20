/*
@author: irfan ahmad
@master_project_id: 6621
@phase_id: 10868
@story_id: 10854
@story_name: Thumbnail Working
@path: final\6621
@test_case_name: Thumbnail Working.js
@description:n/a
@test_steps:
^Generating New thumbnail and duration (if video url is valid) 
-Go to My projects and and go to author area and load the course
-Now go to (url +/utils/generate_video_image.php)
-In the videos, click the setting and thumbnail (which will only be available in uc videos)
-Play the video and load for the frames to load
-After loading video successfully. A message will be shown which shows the duration of the video.
-Now click generate to capture thumbnail.
-If image is captured then thumbnail will be visible in right side and a message will also show that Image Captured and upload thumbnail will become visible.
-Now click upload thumbnail.
-if image will be uploaded successfully then the new image will be shown in the grid after few seconds.

^Generating New thumbnail and duration (if video url is not valid)
-Go to My projects and and go to author area and load the course
-Now go to (url + /utils/generate_video_image.php)
-In the videos, click the setting and thumbnail (which will only be available in uc videos)
-Play the video and load for the frames to load
-A error message will appear

@test_data: n/a
@result: Thumbnail Related operation.
 */

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("Video playlist generate", function() {
    it('Thumbnail Working', function() {
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
    
            cy.get('#search_video').type('creating', { force: true })
            cy.get('#item_2 > .active_videos > .ibox-content > .mt-md > .float-right > :nth-child(3) > span > .icomoon-24px-settings-1').click({ force: true })
            cy.wait(1000);
            cy.get('.d-inline-block.show > .dropdown-menu > .pointer > .dropdown-item').click();
            cy.wait(3000);
            cy.get('#modal_box_video').click();
            cy.wait(2000);
            cy.get('#generate_thumbnail').click();
            cy.wait(2000);
            cy.get('.sweet-alert').should('exist');
        })
    })
})