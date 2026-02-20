/*
@author: Avinash Pandey
@master_project_id: 6620
@phase_id:
@story_id:
@story_name: Freezing Diganosis
@path: final/LiveLab
@test_case_name: Freezing Diganosis
@description: It will login and check the freezing table coming in diagnosis.
@test_steps: 

^To load the diagnosis freezing report for "Ucertify Virtual Lab".
-Click to diagnosis tab of the main page.
-Click on freezing.
-It will load the url for the diagnosis report.
-Enter the machine name with comma saperat.
-Click on submit button.
-Diagnosis freezing report list will open.


@test_data: N/A.
@result: Diagnosis freezing machine list open successfully.
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('Live Area', () => {

    it('Freezing Diganosis', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        cy.get('#diagnosis_button').click()
        cy.get('#freezing_diagnosis')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('#machines').clear({ force: true }).type('bs16', { force: true })
        cy.get('[data-cy="diagnosis_freezing_btn-cy"]').click()
        cy.wait(25000)
    })

})