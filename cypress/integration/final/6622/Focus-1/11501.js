/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11501
@story_name: Video Capture Tool
@path: final/Focus
@test_case_name: Video Capture Tool
@description: N/A
@test_steps:

^It takes any second screenshot of video and annotate them.
-Open utils index page
-click video capture tool
-enter URL and click Go
-Video will run.
-In place of video, content GUIDs can be given.

@test_data: n/a
@result: Video Capture Tool
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Video Capturing Tool', function() {
    it('Video Capturing Tool', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        FocusArea.myFocus()
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="capture_tool"]').click()
        cy.get('[data-cy="video_tool"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        })    
    })
})