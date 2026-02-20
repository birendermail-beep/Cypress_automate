/*
@author: Avinash Pandey
@master_project_id: 6620
@phase_id:
@story_id: 15213
@story_name: vma-modal_content_custom_test_modal
@path: final/6620
@test_case_name: vma-modal_content_custom_test_modal.js
@description: It will login and check the content table coming in catalogue.
@test_steps: 

^To load the content list for "Ucertify Virtual Lab".
-Click to catalogue tab of the main page.
-Click on contents.
-It will load the url for the content list.
-Click on search -> Advanced search.
-Modal will be opened.
-Click on search button of the modal.

^To load the template list for "Ucertify Virtual Lab".
-Click to catalogue tab of the main page.
-Click on template VM.
-It will load the url for the template VM list.
-Click on search -> Advanced search.
-Modal will be opened.
-Click on search button of the modal.
-Click on any action button of template vm list.
-Modal will be opened.

^To load the server logs ip detail for "Ucertify Virtual Lab".
-Click to logs tab of the main page.
-Click on server logs.
-It will load the url for the server logs list.
-Click on search -> Advanced search.
-Modal will be opened.
-Click on search button of the modal.
-Click on any action button of server logs list.
-Modal will be opened.

@test_data: N/A.
@result: Custom test modal open.
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
    })
    it('To load the content list for custom test".', () => {
        cy.get('[data-cy="catalogue_tab"]').click()
        cy.get('[data-cy="content_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy="srch_btn"]').click()
        cy.get('[data-cy="content_tbl"]').should('be.visible')
        cy.get('[data-cy="action_content"]').eq(0).click()
        cy.get('#custom_test').click()
        cy.wait(5000)
    })

    it('To load the template vm list for create a new VM".', () => {
        cy.get('[data-cy="catalogue_tab"]').click()
        cy.get('#templates_vm_catalogue')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('#search_submit').click()
        cy.get('[data-cy="acn_crt_new_btn_cy"]').eq(0).click({
            force: true
        })
        cy.wait(20000)
    })

    it('To load the server logs for ip detail".', () => {
        cy.get('#logs_report').click()
        cy.get('#server_logs')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy="adv_search_button_cy"]').click()
        cy.get('[data-cy="acn_btn_ip_detail_cy"]').eq(0).click({force: true})
        cy.get('[data-cy="show_ip_detail_cy"]').eq(0).click()
        cy.wait(5000)
    })

})