/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11055
@story_name: Access Graded Assessment by Student
@path: final/6607/Student
@test_case_name:Access Graded Assessment by Student
@description: N/A
@test_steps:

^Opening of graded assessment.
-Login on the uCertify.
-Open the my library.
-Open the dashboard of any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS)
-Click on the graded assessment.
-Start the assessment.(https://www.ucertify.com/?func=start_test&assignment_code=951784)"

^Opening of graded assessment2.
-Login on the uCertify.
-Open the my library.
-Open the dashboard of any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS)
-Click on the graded assessment.
-Start the assessment.(https://www.ucertify.com/?func=start_test&assignment_code=953065)"

^Invalid Assessment Code
-Login on the uCertify.
-Open the my library.
-Open the dashboard of any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS)
-Click on Manage as Instructor.
-Open the Assignments tab.
-Click on the action dropdown button.
-Click on the ""Preview Assessment"". or(https://www.ucertify.com/educator/?func=assignment_preview&assignment_course=02pzx&assignment_code=953063)
-Change the assignment_code=953068"

^Password Protected Assessment
-Login on the uCertify.
-Open the my library.
-Open the dashboard of any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS)
-Click on the graded assessment.
-Start the assessment.(https://www.ucertify.com/?func=start_test&assignment_code=951412)

@test_data: N/A
@result: It will open the Assessment page
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Graded assessment', function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                StudentPage.visitLOAplusCompleteCourse(data)
            })
        })
        //test.area6, test.area6.1
    it('Opening of graded assessment.', function() {
        cy.get('[data-cy="assessments"]').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=start_test&assignment_code=951784')
        })
    })
    it('Opening of graded assessment2.', function() {
        cy.get('[data-cy="assessments"]').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=start_test&assignment_code=953065')
        })
    })
    it('Invalid Assessment Code', function() {
        cy.get('[data-cy=manage_as_instructor]').click();
        cy.get('[data-cy="assessments"]').click();
        cy.get("#myTable > tbody > tr:nth-child(1) > td:nth-child(6) > div").click({force:true}).then(() => {
            cy.get("#myTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > ul > li").contains("Preview Assessment")
        })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=assignment_preview&assignment_course=02pzx&assignment_code=953063");
            cy.visit(data.url + "/educator/?func=assignment_preview&assignment_course=02pzx&assignment_code=953068");
        })
    })
    it('Password Protected Assessment', function() {
        cy.get('[data-cy=manage_as_instructor]').click();
        cy.get('[data-cy="assessments"]').click();
        cy.get("#myTable > tbody > tr:nth-child(1) > td:nth-child(6) > div").click({force:true}).then(() => {
            cy.get("#myTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > ul > li").contains("Preview Assessment")
        })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=assignment_preview&assignment_course=02pzx&assignment_code=954965");
        })
    })
})