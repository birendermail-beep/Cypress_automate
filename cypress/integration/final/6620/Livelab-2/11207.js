/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11207
@story_name: Content List
@path: final/LiveLab
@test_case_name: Content List
@description: n/a
@test_steps:

^vma-content
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on catalogue
-Click on contents
-Click on search
-Click on advance search
-Click on search 

@test_data: n/a
@result: content list will display
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-content', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#catalogue_button').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=catalogue&action=contents')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#adv_search_button').click()
    })
})