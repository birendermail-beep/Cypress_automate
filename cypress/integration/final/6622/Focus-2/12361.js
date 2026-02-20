/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 
@story_id: 12361
@story_name: Monthly Attendance
@path: final/Focus
@test_case_name: Monthly Attendance
@description: N/A
@test_steps:

^attendance_monthly
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php?func=reports
-Click on choose button
-Select report  monthly attendance
-Select period last month
-click on go button

@test_data: n/a
@result: attendence list of a month will display
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {
    it('attendance_monthly', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php?func=reports')
        })
        cy.get('#show_report_modal').click()
        cy.get('.col-md-5 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click({ force: true })
        cy.wait(2000)
        cy.get('#report_chosen').select('Monthly Attendance', { force: true })
        cy.wait(2000)
        cy.get('#report_auto_date').select('Last Month', { force: true })
        cy.wait(2000)
        cy.get('#advance_search').click()
    })

})