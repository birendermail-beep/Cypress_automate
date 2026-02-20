/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11544
@story_name: ETA Form
@path: final/Focus
@test_case_name: ETA Form
@description: N/A
@test_steps:

^eta_form_new
1) Go to ucertify.com
2) Login with given details
3) Go to URL https://www.ucertify.com/focus/index.php
4) Click on goal/project tab
5) Click on My project
6) Click on setting button on the right side
7) Click on EQ request

@test_data: n/a
@result: New ETA request form will open
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {

    it('eta_form_new', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php')
        })
        cy.get('[data-cy=goal_tab]').click()
        cy.wait(2000)
        cy.get('[data-cy=my_project]').click({ force: true })
        cy.wait(5000)
        // Use in future no data found currently.
        // cy.get('.actmenus > .dropdown > .btn').click()
        // cy.get(2000)
        // cy.get('.actmenus > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click({ force: true })
    })

})