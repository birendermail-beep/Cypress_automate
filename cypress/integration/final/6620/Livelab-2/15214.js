/*
@author: Avinash Pandey
@master_project_id: 6620
@phase_id:
@story_id: 15214
@story_name: snap modal
@path: final/LiveLab
@test_case_name: snap modal
@description: It will login and check the content table coming in catalogue.
@test_steps: 

^To load the content list for
-Click to catalogue tab of the main page.
-Click on contents.
-It will load the url for the content list.
-Click on search -> Advanced search.
-Modal will be opened.
-Click on search button of the modal.

@test_data: N/A.
@result: snap modal open.
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('live_lab area', function() {

    it('snap_modal', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=items&class_code=055Jj')
            cy.get('[data-cy=labs]').click()
            cy.visit(data.url + '/?func=navigate_items&item_sequence=4')
        })
        cy.get('.pl-3').click({ force: true });
        cy.get('#capability0 > li:first-child').then(($text) => {
            if ($text.text().includes('On')) {
                cy.get('[data-cy=status_machine]').click();
            } else {
                cy.get('[data-cy=status_machine]').click();
            }
        })
        cy.wait(30000)
        cy.get('#manage_settg').click({ force: true })
        cy.wait(30000)
        cy.get('#snapshot').click({ force: true })
    })
})