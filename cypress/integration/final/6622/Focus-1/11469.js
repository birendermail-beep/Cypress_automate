/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 10110
@story_id: 11469
@story_name: Person Wise Phase Status Report
@path: final/Focus
@test_case_name: Person Wise Phase Status Report
@test_steps:

^phase status based on person
-Click Reports
-From given options Select 
-Report type-Person Wise Phase ReportProject Category
-Click Go

@test_data:N/A
@result: report will come
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    it('Person wise phase status report', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        FocusArea.myFocus()
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="report_opt_more"]').click()
        cy.get('[data-cy="person_phase_report"]').click()
        cy.wait(2000)
        cy.get('[data-cy="phase_report_table"]').should('be.visible')
    })
})