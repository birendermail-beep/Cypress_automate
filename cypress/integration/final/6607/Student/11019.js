/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11019
@story_name: Download Course File
@path: final/6607/Student
@test_case_name: Download Course File
@description:
@test_steps:
^Download Course File when Resource is added
-click on download button (when you have added any resource from educator then it will come)

@test_data: n/a
@result: course file 
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student page', function() {
    //course file1 and course file2
    it('click on download button (when you have added any resource from educator then it will come)', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '?func=load_course&course=Demo.AA1&class_code=06AR7')
        })
    cy.get('[data-cy=download_course_resources]').click({ force: true });
    cy.get('[data-original-title="Download"]').eq(0).click({ force: true });
    })
})