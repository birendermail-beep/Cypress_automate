/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 
@story_id: 11551
@story_name: Tickler Master View Report
@path: final/Focus
@test_case_name: Tickler Master View Report
@description: N/A
@test_steps:

^tickler_individual_report
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on more
-Click on tickler master
-Click on options
-Click on view reports

@test_data: n/a
@result: tickler report will display
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {

    it('tickler_individual_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php')
            cy.get(':nth-child(6) > .nav-link').click()
            cy.wait(2000)
            cy.get('.show > :nth-child(5) > .dropdown-item').click({ force: true })
            cy.wait(5000)
            cy.get('#searchbut').click()
            cy.wait(2000)
            cy.visit(data.url + '/focus/index.php?func=tickler_report&action=generate_tickler_report')
        })
        cy.wait(3000)
    })

})