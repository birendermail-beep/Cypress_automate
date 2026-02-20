/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11206
@story_name: Course List
@path: final/LiveLab
@test_case_name: Course List
@description: n/a
@test_steps:

^vma-courses_list
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on catalogue dropdown and click on course
-Click on search button and click on advance search
-Click on search 

@test_data: n/a
@result: course list wil display
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-courses_list', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#catalogue_button').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=catalogue&action=courses&vcenter_server_id=-1')
        })
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#adv_search_button').click()
    })

})