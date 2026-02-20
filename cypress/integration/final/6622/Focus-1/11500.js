/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11500
@story_name: Leave Report
@path: final/Focus
@test_case_name: Leave Report
@description: N/A
@test_steps:

^User can see trend
-Open Leave report from reports
-Click on settings open and click view details.
-Leave trend will be shown in modal.


^focus_leave_report and  focus_leave_table
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on more
-Click on leave list

^focus_leavelate_report
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php?func=reports
-Click on choose button
-Select report leave report
-Select period last week
-click on go button

@test_data: n/a
@result: Leave trend will be shown.
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('User can see trend', function() {
    it('User can see trend', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.visit(data.url + '/focus/index.php')
        cy.get(':nth-child(6) > .nav-link').click()
        cy.wait(2000)
        cy.get('.show > :nth-child(3) > .dropdown-item').click()
        cy.wait(2000)
        })
    })
    it('focus_leave_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        cy.visit(data.url + '/focus/focus_main.php?func=leave')
        cy.wait(3000)
        cy.get('.span13').eq(0).click({force: true})
        })
    })
    it('focus_leavelate_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php?func=reports')
            cy.get('#show_report_modal').click()
            cy.get('.col-md-5 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click({ force: true })
            cy.wait(2000)
            cy.get('#report_chosen').select('Leave Report', { force: true })
            cy.wait(2000)
            cy.get('#report_auto_date').select('Last Week', { force: true })
            cy.wait(2000)
            cy.get('#advance_search').click({force: true})
        })
    })
})