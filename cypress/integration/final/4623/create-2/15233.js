/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15233
@story_name: media_list
@path: final/Create
@test_case_name: media_list
@description: Create area
@test_steps: 
^Media upload page
-Login to ucertify.com as author.
-Open the following url:(https://www.ucertify.com/educator/media_list.php).
-Click on the three dots of image.
-click on the embed option.

@test_data: N/A.
@result: opening the copy embed code modal
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index' 
describe('embed modal page', function() {
    it('test the embed modal page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/media_list.php");
        })
        cy.get(".icomoon-menu-2").eq(0).click().then(() => {
            cy.get("ul > li").contains("Embed").click();
        })
    })
})