/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11541
@story_name: All Data Report
@path: final/Focus
@test_case_name: All Data Report
@description: N/A
@test_steps:

^focus_all_data_report
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php?func=reports
-Click on choose button
-Select report All Data
-Select period last week
-Click on go button

@test_data: n/a
@result: All data reports will display
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {
    it('focus_all_data_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php?func=reports')
        })
        cy.get('#show_report_modal').click()
        cy.get('#report_chosen').select('All Data', { force: true })
        cy.wait(2000)
        cy.get('#report_auto_date').select('Last Week', { force: true })
        cy.wait(2000)
        cy.get('#advance_search').click()
    })

})