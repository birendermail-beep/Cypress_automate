/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11138
@story_name: Server List
@path: final/LiveLab
@test_case_name: Server List
@description: n/a
@test_steps:

^vma-servers
-Go to ucertify.com and login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on catalogue dropdown and click on servers
-Click on search and click on advance search
-Click on search 
-Again click on advance search and fill some server name and click on search

^vma-addserver_form
-Go to ucertify.com 
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on catalogue
-Click on server
-Click on search
-Click on advance search
-Click on search 
-Click on setting button of any one server and click edit

@test_data: n/a
@result: server edit form will open
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#catalogue_button').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=catalogue&action=servers&vcenter_server_id=-1')
        })
    })    
    it('vma-servers', function() {
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#server_name').clear({ force: true }).type('abcd', { force: true })
        cy.get('#adv_search_button').click()
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#server_name').clear({ force: true })
        cy.get('#adv_search_button').click()
    })
    it('vma-addserver_form', function() {
        cy.fixture('global').then(data => {
            cy.get('.input-group-append > .dropdown-toggle').click()
            cy.get('#mng_advance_search').click()
            cy.get('#server_name').clear({ force: true })
            cy.get('#adv_search_button').click()
            cy.get(':nth-child(1) > :nth-child(9) > .dropdown > .btn ').eq(0).click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=catalogue&action=addserver_form&device_id=363')
        })    
    })
})