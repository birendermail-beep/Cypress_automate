/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11536
@story_name: Daily Status Report
@path: final/Focus
@test_case_name: Daily Status Report
@description: N/A
@test_steps:

^focus_daily_status_report
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php?func=reports
-Click on choose button
-Select report  Daily status report
-Select period last week
-click on go button

@test_data: n/a
@result: daily status report will display
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {
    it('focus_daily_status_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php?func=reports')
        })
        cy.get('#show_report_modal').click()
        cy.get('.col-md-5 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click({ force: true })
        cy.wait(2000)
        cy.get('#report_chosen').select('Daily Status Report', { force: true })
        cy.wait(2000)
        cy.get('#report_auto_date').select('Last Week', { force: true })
        cy.wait(2000)
        cy.get('#advance_search').click()
    })
})