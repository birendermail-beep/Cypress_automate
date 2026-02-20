/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15230
@story_name: listview
@path: final/Create
@test_case_name: listview
@description: Create area
@test_steps: 
^Media upload page
-Login to ucertify.com as author.
-Open the following url:(https://www.ucertify.com/educator/media_list.php)
-click on the List view button.

@test_data: N/A.
@result: Opening the media upload page in list view.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index' 
describe('media upload grid view', function() {
    it('test the media upload grid view page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/media_list.php');
        })
        cy.get('#listView').click();
    })
})