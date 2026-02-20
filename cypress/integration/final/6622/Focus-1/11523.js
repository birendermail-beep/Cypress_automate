/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11523
@story_name: Bug List Report
@path: final/Focus
@test_case_name: Bug List Report
@description: N/A
@test_steps:

^focus_modal_bug_report_form
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on more
-Click bug list
-Click on new button

@test_data: n/a
@result: bug reporting form will open
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {

    it('focus_modal_bug_report_form', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php')
        })
        cy.get(':nth-child(6) > .nav-link').click()
        cy.wait(2000)
        cy.get('.show > :nth-child(4) > .dropdown-item').click({ force: true })
        cy.wait(5000)
        cy.get('#addnew').click({ foce: true })
        cy.wait(5000)
    })

})