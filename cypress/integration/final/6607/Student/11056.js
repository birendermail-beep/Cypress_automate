/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11056
@story_name: Access Graded Assessment by Instructor
@path: final/6607/Student
@test_case_name:Access Graded Assessment by Instructor 
@description: N/A
@test_steps:

^Preview Assessment with Instructor Permission
-Login on the uCertify.
-Open the my library.
-Open the dashboard of any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS)
-Click on Manage as Instructor.
-Open the Assignments tab.
-Click on the action dropdown button.
-Click on the "Preview Assessment".(https://www.ucertify.com/educator/?func=assignment_preview&assignment_course=02pzx&assignment_code=954965)

@test_data:N/A
@result: Preview Assessment with Instructor Permission
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Graded assessment', function() {
    it('Preview Assessment with Instructor Permission', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.openDashboard()
        cy.get('[intro-id="manage_as_instructor"]').click();
        cy.get('[intro-id="assessments"]').click();
        cy.get("#myTable > tbody > tr:nth-child(1) > td:nth-child(6) > div").click({force:true}).then(() => {
            cy.get("#myTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > ul > li").contains("Preview Assessment")
        })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=assignment_preview&assignment_course=02pzx&assignment_code=954965");
        })
    })
})