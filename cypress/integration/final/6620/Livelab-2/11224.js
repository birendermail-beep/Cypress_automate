/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11224
@story_name: Datastores List
@path: final/LiveLab
@test_case_name: Datastores List
@description: n/a
@test_steps:

^vma-datastores
-Go to ucertify.com
-Login into website
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on catalogue 
-Click on data stores
-Click on search
-Click on advance search
-Click on search 

@test_data: n/a
@result: datastores list will open
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-datastores', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#catalogue_button').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=catalogue&action=datastores&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('[data-cy=srch_btn]').click()
    })
})