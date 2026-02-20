/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11223
@story_name: License Report
@path: final/LiveLab
@test_case_name: License Report
@description: n/a
@test_steps:

^vma-license_report
-Go to ucertify.com  login
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on logs
-Click on licence report
- Click on search
-Click on advance search
- Click on search 
- Again click on advance search
- Fill data full data as uses full data 
-.Click on search

^To load the server logs license report for "Ucertify Virtual Lab".
-Click to logs tab of the main page.
-Click on license report.
-It will load the url for the license report.
-Click on search -> Advanced search.
-Modal will be opened.
-Clear the full data value.
-Click on search button.
-License report list will open.

@test_data: n/a
@result: license report will display
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('vma-license_report', function() {
        cy.fixture('global').then(data => {
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#logs_report').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=license_report&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#adv_search_button').click()
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#full_data').select('Usage Full Data', { force: true })
        cy.get('#adv_search_button').click()
    })
    it('To load the license report list without full data.', () => {
        LiveLabArea.visitVmAdmin()
        cy.get('#logs_report').click()
        cy.get('#license_report')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('#select2-full_data-container > .select2-selection__clear').click()
        cy.get('#license_report_advance_search > .modal-dialog > .modal-content > .modal-body').click()
        cy.get('[data-cy="adv_search_button_license_cy"]').click()
        cy.wait(15000)
    })
})