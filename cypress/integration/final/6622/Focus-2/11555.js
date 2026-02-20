/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 
@story_id: 11555
@story_name: Side Pane Section
@path: final/Focus
@test_case_name: Side Pane Section
@description: N/A
@test_steps:

^project_master
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/focus_main.php?func=qq
-Click on EQs
-Click on any rows
-Click on side pane
-Click on Weekly Goals
-Click on any rows
-Click on side pane
-Click on Bugs
-Click on any rows
-Click on side pane
-Click on QQs
-Click on any rows
-Click on side pane
-Click on Leaves
-Click on any rows
-Click on side pane

@test_data: n/a
@result: content list in side pane will display 
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {
    it('side_pane_data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/focus_main.php?func=qq')
        })
        cy.wait(3000)
        cy.get('.span2').eq(0).click()
        cy.contains('QQ Listing').should('be.visible')
    })
})