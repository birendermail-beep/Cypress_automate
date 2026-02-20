/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15226
@story_name: author_media
@path: final/Create
@test_case_name: author_media
@description: Create area
@test_steps: 
^media upload
-Login to ucertify.com as author.
-Open the following url:(https://www.ucertify.com/author/?func=media)

@test_data: N/A.
@result: Opening the author_media page.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index' 
describe('author media', function() {
    it('test the author media page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/media_list.php');
        })
        cy.get("h2").contains("Media").should("be.visible");
    })
})