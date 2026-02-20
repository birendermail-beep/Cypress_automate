/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10893
@story_name: Download Instructor Resource
@path: final/6615
@test_case_name: Download Instructor Resource.js
@description: n/a
@test_steps:
^Resources Tab/ Download Instructor resources
-Click on Resources tab;        
-Click on Download button for the required Resource;     

@test_data: n/a
@result:Download Instructor Resource.
 */

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.13.1 Resources Tab/ Download Instructor resources', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/?func=class_edit&u_course_code=04Kst.05M7I')
        })
        cy.get('[intro-id="resources"] > .nav-link > .ml').click()
        cy.get(':nth-child(1) > .span1 > .btn').click()
    })
});