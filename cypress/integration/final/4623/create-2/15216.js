/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15216
@story_name: author_media_update_image
@path: final/Create
@test_case_name: author_media_update_image
@description: Create area
@test_steps: 
^media upload
-Login to ucertify.com as author.
-Open the editor are.(https://www.ucertify.com/editor/index.php).
-Click on the grid icon "Editor Navigation".
-Click on media.

@test_data: N/A.
@result: Opening the media upload file
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index' 
describe('medial update image', function() {
    it('test the my group page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/editor/index.php');
            cy.get('.icomoon-grid').click()
            cy.get(':nth-child(2) > .outline1 > .s7').click()
        })
    })
})