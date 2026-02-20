/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11211
@story_name: Template VM List
@path: final/LiveLab
@test_case_name: Template VM List
@description: n/a
@test_steps:

^vma-templates_vm
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on catalogue
-Click on template vm
-Click on search 
-Click on advance search
-Click on search 

@test_data: n/a
@result: virtual machine template list will display
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-templates_vm', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#catalogue_button').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=catalogue&action=templates_vm&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#search_submit').click()
    })

})