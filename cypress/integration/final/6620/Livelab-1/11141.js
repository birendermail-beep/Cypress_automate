/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11141
@story_name: Device Activity
@path: final/LiveLab
@test_case_name: Device Activity
@description: n/a
@test_steps:

^vma-device_activity
-Go to ucertify.com 
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on log
-Click on  life_time_usage_report
-Click on search 
-Click on advance search
-Click on search 

@test_data: n/a
@result: no records found will display
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-device_activity', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#logs_report').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=device_activity&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#vm_task').select('Connect', { force: true })
        cy.get('#adv_search_button').click()
    })
})