/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 
@story_id: 11554
@story_name: Bugs
@path: final/Focus
@test_case_name: Bugs
@description: N/A
@test_steps:

^bug_details
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/focus_main.php?func=bugs
-Click on any rows

@test_data: n/a
@result: bug details will open in all in one page
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {

    it('bug_details', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/focus_main.php?func=bugs')
        })
        cy.get('.text-truncate').eq(0).click()
    })
})