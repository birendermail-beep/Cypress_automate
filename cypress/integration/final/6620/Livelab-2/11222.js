/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11222
@story_name: VM Admin Device Form
@path: final/LiveLab
@test_case_name: VM Admin Device Form
@description: n/a
@test_steps:

^vma-device_form
-Go to ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on search 
-Click on advance search
-Click on search 
-Click on setting button  of any machine
-Click on edit

@test_data: n/a
@result: device update form will open
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-device_form', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('.input-group-append > .dropdown-toggle').click()
            cy.get('#mng_advance_search').click()
            cy.get('#search_submit').click()
            cy.get(':nth-child(14) > .dropdown > .btn > .icomoon-cog').eq(0).click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=machine_add&action=view_form&device_id=494&os_id=10')
        })
    })
})