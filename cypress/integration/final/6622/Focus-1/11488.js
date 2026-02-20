/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 
@story_id: 11488
@story_name: Weekly Goal
@path: final/Focus
@test_case_name: Weekly Goal
@description: N/A
@test_steps:

^tickler_list_table
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on goal/project tab
-Click on weekly Goal
-Fill the tickler on allowed date

^focus_addupdate_goal
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on goal/project tab
-Click on weekly goal
-Click add button on right side

@test_data: n/a
@result: Weekly Goal
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index'
describe('author_Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php')
        })
    })
    it('tickler_list_table', function() {
        cy.get(':nth-child(2) > .nav-link > [rel="tooltip"] > .d-lg-inline-block').click({ force: true })
        cy.get('[data-cy=weekly_goal] > .changeURL').click({ force: true })
        cy.wait(2000)
        cy.get('.edit_tickler > .color_0.current_day_due').eq(0).click({ force: true })
        cy.get('#tickler_done_status').clear({ force: true }).type('100', { force: true })
        cy.get('#link').clear({ force: true }).type('https://www.typing.com/apiv1/student/tests/124888908/99791464/certificate', { force: true })
        cy.wait(2000);
        cy.get('#tickler_comment').clear({ force: true }).type('done', { force: true })
        cy.wait(3000);
        cy.get('#tickler_done_save').click({force:true});
    })
    it('focus_addupdate_goal', function() {
        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.get('.dropdown-menu > :nth-child(1) > .changeURL').click({ force: true })
        cy.wait(5000)
        cy.get('.pull-right > .btn').click()
    })
})