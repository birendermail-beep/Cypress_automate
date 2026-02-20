/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 
@story_id: 11553
@story_name: Leaves
@path: final/Focus
@test_case_name: Leaves
@description: N/A
@test_steps:

^leave_details
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/focus_main.php?func=leave
-Click on Leaves
-Click on any rows

@test_data: n/a
@result: leave details will display in all in one page
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {
    it('leave_details', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.visit(data.url + '/focus/focus_main.php?func=leave')
        cy.wait(3000)
        cy.get('.span13').eq(0).click()
        })
    })
})