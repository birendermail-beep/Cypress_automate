/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11472
@story_name: My EQs
@path: final/Focus
@test_case_name: My EQs
@description: N/A
@test_steps:

^My EQs area
-Click on Goal/Project menu.
-Click on My EQs sub menu

^My QQs area
-Click on Goal/Project menu.
-Click on My QQs sub menu."

^eta_details_container
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/focus_main.php?func=qq
-Click on EQs
-Click on any rows

^focus_bug_version_history
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/focus_main.php?func=qq
-Click on EQs
-Click on any rows

^pe-toolbar-focus
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/focus_main.php?func=qq
-Click on EQs
-Click on any rows

^search_layout
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/focus_main.php?func=qq
-Click on EQs
-Click on all tabs one by one

^eta_details
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/focus_main.php?func=qq
-Click on EQs
-Click on any rows

^focus_view
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/focus_main.php?func=eta
-Click on EQs
-Click on any rows

^eta_rightpane
-Go to ucertify.com.
-Login with given details.
-Go to URL https://www.ucertify.com/focus/index.php.
-Click on goal/project tab.
-Click on My EQs.
-Click on detail on right side.

@test_data: n/a
@result: My EQs section will show
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    })
    it('My EQs Section', () => {
        FocusArea.myFocus()
        cy.get('[data-cy="goal_tab"]').click()
        cy.get('[data-cy="eq_opt"]').click()
    })
    it('My QQs Section', () => {
        FocusArea.myFocus()
        cy.get('[data-cy="goal_tab"]').click()
        cy.get('[data-cy="qq_opt"]').click()
    })
    it('eta_details_container', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/focus_main.php?func=eta')
            cy.get('.text-truncate').eq(0).click({ force: true })
        })
    })
    it('focus_bug_version_history and eta_details', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/focus_main.php?func=eta')
            cy.get('.text-truncate').eq(0).click({ force: true })
        })
    })
    it('pe-toolbar-focus and focus_view', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/focus_main.php?func=eta')
        })
        cy.get('.text-truncate').eq(0).click({ force: true })
    })
    it('search_layout', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/focus_main.php?func=qq')
        })
    })
    it('eta_rightpane', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/index.php')
        })
        cy.get(':nth-child(2) > .nav-link > [rel="tooltip"] > .d-lg-inline-block').click()
        cy.get(':nth-child(4) > .changeURL').click()
        cy.wait(5000)
        cy.get(':nth-child(1) > .switchtabs').click()
    })
})