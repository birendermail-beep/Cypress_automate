/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 11024
@story_id: 14974
@story_name: 
@path: final/6615
@test_case_name: .js
@description: 
@test_steps:
^

@test_data: n/a

@result: Section is moved under Archive tab
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {

    it('1.8.2.2 Use of Instructor tools button in list view', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.showManage()
            cy.visit(data.url + '/educator/?func=class_edit&u_course_code=' + data.course_code[1] + '.' + data.class_code[6])
        })
    })
});