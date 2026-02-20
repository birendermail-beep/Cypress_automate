/*
@author:Anirudha pratap
@master_project_id: 6607
@phase_id:
@story_id: 14995
@story_name:Assessment
@path: final/6607/Student
@test_case_name:Assessment
@description:
@test_steps:
    
^test case of assessment area
-Visit to website.
-Login into website.
-Click on the Graded assessment
-Click on the Start assessment.
-Click on start.
-Click on the Course Navigation icon from the top.
-Click on the Assessment.

    @test_data:n/a
@result:open the assessment area
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Assignments Cover', function() {
    it('Opening the prepkit cover assignments', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=LO-Aplus-complete&class_code=05qrv')
        })
        cy.get('[data-cy="assessments"]').click({ force: true })
        cy.get('.icomoon-play-4').click({ force: true })
        cy.get('#start_test').click({ force: true })
        StudentPage.endTest()
        cy.get('.icomoon-grid').click();
        cy.get('.icomoon-assessment-2').click();
    })
})