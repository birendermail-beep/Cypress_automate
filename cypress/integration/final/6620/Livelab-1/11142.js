/*
@author: Avinash Pandey
@master_project_id: 6620
@phase_id:
@story_id: 11142
@story_name: Device Task Log
@path: final/LiveLab
@test_case_name: Device Task Log
@description: It will login and check the machine issue report table coming in logs.
@test_steps: 

^To load the machine issue report log for "Ucertify Virtual Lab".
-Click to logs tab of the main page.
-Click on machine issue report.
-It will load the url for the machine issue report.
-Click on search -> Advanced search.
-Modal will be opened.
-Click on search button.
-Machine issue report list will open.
-Click on action button on the right top of machine issue report list table

@test_data: N/A.
@result: Action drop down menu will open.
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('Live Area', () => {

    it('To load the machine issue report log.', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        cy.get('#logs_report').click()
        cy.get('#machine_issue_report')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy="adv_machine_issue_cy"]').click({ force: true })
        cy.wait(5000)
        cy.get('[data-cy="action_btn"]').click({ force: true })
        cy.wait(15000)
    })

})
