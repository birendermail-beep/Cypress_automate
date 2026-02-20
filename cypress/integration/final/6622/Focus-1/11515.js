/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11515
@story_name: Tickler Report
@path: final/Focus
@test_case_name: Tickler Report
@description: N/A
@test_steps:

^There should be multiple dates layout/single date layout
^Approve status in tickler report

@test_data: n/a
@result: Tickler Report
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        FocusArea.myFocus()
    })

    it('Execution report', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="report_opt_more"]').click()
        cy.get('[data-cy="executing_report_link"]').click()
        cy.wait(2000)
        cy.get('[data-cy="executing_report_table"]').should('be.visible')
        cy.fixture('global').then(data => {
            cy.get('[data-cy="filter_category_select"]').select(data.teams[1], { force: true })
        })
    })
})