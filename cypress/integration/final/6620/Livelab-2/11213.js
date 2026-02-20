/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11213
@story_name: Device Task Log
@path: final/LiveLab
@test_case_name: Device Task Log
@description: n/a
@test_steps:

^vma-device_task_logs
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on log 
-Click on device task logs
-Click on search
-Click on advance search

@test_data: n/a
@result: no records found will display
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-device_task_logs', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#logs_report').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=device_task_logs&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#adv_search_button').click()
    })
})