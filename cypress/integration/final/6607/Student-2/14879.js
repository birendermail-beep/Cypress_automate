/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 14879
@story_name: timeup
@path: final/6607/Student
@test_case_name: time up
@description: 
@test_steps: 
^timesup of exercise
-Open the my library.
-Open any course.
-Start any exercise.
-Wait for time up.

@test_data:N/A  
@result: It will open a modal of times up.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Feature download', function() {

    it('Download feature page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=05O8Y");
        })
        cy.get('[data-cy="chapters"]').click();
        cy.get('[data-cy="exercises"]').eq(1).click();
        cy.get('#test_form').then(($text) => {
            if ($text.text().includes('Last test was not completed. Do you want to continue?')) {
                cy.get('#terminate_test_pre').click()
                cy.get('[data-cy=terminate_current_test]').contains('Yes').click({ force: true })
            }
        })
        cy.get('#test_mode').click();
        StudentPage.endTest()
    })
})