/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11481
@story_name: Apply Leave
@path: final/Focus
@test_case_name: Apply Leave
@description: N/A
@test_steps:

^Leave module changes
-Click on Leave/Event Menu
-select any future date.
-Click apply leave
-Leave form will open.

^Validating fields
-Leave type is not blank.
-start date is not blank
-Back to office date is not blank
-Click on Request button

^Policy not followed rule
-Leave type is not blank.
-start date is not blank
-Back to office date is not blank
-Click on Request button

^Accrued leave not enough rule
-Leave type is not blank.
-start date is not blank
-Back to office date is not blank
-Click on Request button

@test_data: n/a
@result: Apply Leave
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    })
    it('focus_leave_table', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/index.php')
        })
        cy.get(':nth-child(6) > .nav-link').click()
        cy.wait(2000)
        cy.get('.show > :nth-child(3) > .dropdown-item').click()
        cy.wait(2000)
    })
    it('leave_details', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/focus_main.php?func=leave')
        })
        cy.wait(3000)
        cy.get('.span13').eq(0).click()
    })
    it('focus_leavelate_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/index.php?func=reports')
        })
        cy.get('#show_report_modal').click()
        cy.get('.col-md-5 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click({ force: true })
        cy.wait(2000)
        cy.get('#report_chosen').select('Leave Report', { force: true })
        cy.wait(2000)
        cy.get('#report_auto_date').select('Last Week', { force: true })
        cy.wait(2000)
        cy.get('#advance_search').click()
    })
})