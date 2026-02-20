/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 
@story_id: 11540
@story_name: Action Item Report
@path: final/Focus
@test_case_name: Action Item Report
@description: N/A
@test_steps:

^focus_actionitem_report
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php?func=reports
-Click on choose button
-Select report Action item report
-Select start date & end date
-click on go button

@test_data: n/a
@result: Action item reports will display
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {

    it('focus_actionitem_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php?func=reports')
        })
        cy.get('#show_report_modal').click()
        cy.get('#report_chosen').select('Action Items Report', { force: true })
        cy.wait(2000)
        cy.get('#start_date_search').clear({ force: true }).type('01-02-2020', { force: true })
        cy.get('#end_date_search').clear({ force: true }).type('15-03-2020{enter}', { force: true }).blur()
        cy.wait(2000)
        cy.get('#advance_search').click()
    })

})