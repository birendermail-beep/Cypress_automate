/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 
@story_name: Manage Students
@path: final/6615
@test_case_name: Manage Students
@description: n/a
@test_steps:
^Check All Student List
-Click on 'All Students' tab

@test_data:N/A
@result: Check All Student List
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {

    it('1.7.1 Check All Student List', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('[data-cy=all_student]').click({ force: true })
    })
});