/*
@author: Avinash Pandey
@master_project_id: 6620
@phase_id:
@story_id: 11145
@story_name: Device Help
@path: final/LiveLab
@test_case_name: Device Help
@description: It will login and check the machine autograding device help.
@test_steps: 

^To load the machine autograding device help for "Ucertify Virtual Lab".
-Click to device tab of the main page.
-Give the machine list in search box and click on search icon.
-Click on setting button of any machine.
-Click on testautograding and click help tab in the right side pane.

@test_data: N/A.
@result: Device help description open successfully.
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('Live Area', () => {

    it('To load device help in machine testautograding.', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        cy.get('[data-cy="search_txt"]').clear({ force: true }).type('bs16', { force: true })
        cy.get('[data-cy="search_txt_btn"]').click()
        cy.wait(5000)
        cy.get('[data-cy="action_machine"]').eq(0).click({ force: true })
        cy.get('[data-cy="test_autograding"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get(':nth-child(5) > .pointer').click()
    })

})