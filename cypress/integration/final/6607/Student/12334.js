/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11696
@story_name: Result Page of Pre Assessment
@path: final/6607/Student
@test_case_name: Result Page of Pre Assessment
@description: 
@test_steps: 

^Result Page of Pre Assessment
-visit the website
-login and open a course dashboard
-click on pre-assessment
- click on start 
-attempt the question
-end the test see the result 

@test_data:
@result: Should be able to see the number of courses.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('login page description', () => {
    it('pre Assessment result page', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy="pre_asssement"]').click()
        cy.get('#test_mode').click()
        cy.questionNavigation()
        StudentPage.endTest()

    })
})