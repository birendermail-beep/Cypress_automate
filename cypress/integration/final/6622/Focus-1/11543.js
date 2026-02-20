/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11543
@story_name: Person Wise Bug Report
@path: final/Focus
@test_case_name: Person Wise Bug Report
@description: N/A
@test_steps:

^bug_person_wise
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on more
-Click on Reports
-Click on Person Wise Bug
-Click on Reports
-Click on Person Wise Bug(RollUp)

@test_data: n/a
@result: bug person report list will open
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {

    it('bug_person_wise', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php')
        })
        cy.get(':nth-child(6) > .nav-link').click()
        cy.wait(5000)
        cy.get('.reports_menu').click()
        cy.wait(5000)
        cy.get(':nth-child(9) > .dropdown-menu > :nth-child(2) > .dropdown-item').click({ force: true })
        cy.wait(5000)
        cy.get(':nth-child(6) > .nav-link').click()
        cy.wait(5000)
        cy.get('.reports_menu').click({ force: true })
        cy.wait(5000)
        cy.get(':nth-child(9) > .dropdown-menu > :nth-child(3) > .dropdown-item').click({ force: true })
        cy.wait(5000)
    })

})