/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11225
@story_name: Student List
@path: final/LiveLab
@test_case_name: Student List
@description: n/a
@test_steps:

^vma-device_activity_report
-Go to ucertify.com 
-Login into website
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-click on log 
-Click on device activity report
-Click on search 
-Click on advance search
-Fill the period last week 
-Click on search 

@test_data: n/a
@result: activity report list will open
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-device_activity_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#logs_report').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=device_activity_report&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#report_auto_date').select('Last Week', { force: true })
        cy.get('#adv_search_button').click()
    })
})