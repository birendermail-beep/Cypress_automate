/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11129
@story_name: Content Activity Report
@path: final/LiveLab
@test_case_name: Content Activity Report
@description: n/a
@test_steps:

^vma-content_activity_report
-Go to ucertify.com 
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on log 
-Click on content activity report
-Click on search
-Click on advance search
-Fill the period last week 
-Click on search 

^vma-manage_search
-Go to ucertify.com 
-Login with into page
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Type bs16 in search box
-Click on search icon
-Click on log
-Click on content activity report
-Click on search
-Click on advance search
-.Fill the period last week
-.Click on search 

@test_data: n/a
@result: content activity report will open
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function () {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)    
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
        })
    })
    it('vma-manage_search', function() {
        cy.get('#search_text').clear({ force: true }).type('bs16', { force: true })
        cy.get('#search_manage_course').click({ force: true })
        cy.get('#logs_report').click()
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#report_auto_date').select('Last Week', { force: true })
        cy.get('#adv_search_button').click()

    })
    it('vma-content_activity_report', function() {
        cy.get('#logs_report').click()
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#report_auto_date').select('Last Week', { force: true })
        cy.get('#adv_search_button').click()

    })
})