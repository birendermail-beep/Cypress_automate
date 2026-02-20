/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11215
@story_name: Latency Report
@path: final/LiveLab
@test_case_name: Latency Report
@description: n/a
@test_steps:

^vma-latency_report
-Go to ucertify.com and 
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on log 
-Click on  latency_report
-Click on search 
-Click on advance search
-Click on search 

@test_data: n/a
@result: latency report will display
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-latency_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#logs_report').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=latency_report&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#adv_search_button').click()
    })
})