/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11078
@story_name: Focus Demo
@path: final/Focus
@test_case_name: Focus Demo
@description: N/A
@test_steps:

^Open Daily status Report
-Click on reports menu
-click on choose button.
-Report Modal will be opened
-Select 'Daily status report' and date range.
-Click on Go.

^Find records less than percentage
-Enter any number in text boxes above any column

^When anyone have multiple goals
-Hover above any percentage

@test_data: n/a
@result: Open Daily status Report
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    it('Open Daily status Report', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            FocusArea.myFocus()
            FocusArea.myReport()
            cy.get('[data-cy="show_report_modal"]').click()
            cy.get('[data-cy="start_dt"]').focus().type(data.focus.start)
            cy.get('[data-cy="end_dt"]').focus().type(data.focus.end)
            cy.get('[data-cy="report_chosen_select"]').select("7", { force: true })
            cy.get('[data-cy="report_option_select"]').select("2", { force: true })
            cy.get('[data-cy="go_btn"]').click()
            cy.wait(3000)
            cy.get('.table').should('be.visible')
        })
    })
})