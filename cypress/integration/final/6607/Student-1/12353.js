/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 12353
@story_name: Practice Test in Learn Mode
@path: final/6607/Student
@test_case_name: Practice Test in Learn Mode
@description: N/A    
@test_steps: 
^To check whether in Learn mode answering and submitting the questions give the immidiate remediation
-Go to Practice Test 
-Attempt any of the practice test in Learn mode 
-Submit the question after attempting it to check if immidiate remediation is available"

@test_data: Any prepkit
@result: It should provide immidiate remediation i.e. explanation the correct answer , the lesson and the Exam objective.
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('This will Test the Exercise of the Lession', function() {
    /** Test the Exercise in the Learn Mode */
    it('Exercise in Learn Mode', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
            cy.get('[data-cy=practice_tests]').contains('Practice Tests').click().then(() => {
                cy.get('.practice_test_page').should('exist')
                cy.get('[data-cy="test_form"]').should('exist')
                cy.get('#part1').should('exist')
            })
            cy.get('[data-cy=test_tests]').eq(0).click()
            cy.get('[data-cy=test_form]').should('exist')
            cy.get('[data-cy=learn_mode]').click()
            cy.get('#learn').should('exist').contains('Submit')
            cy.get('#next').should('exist')
            cy.get('#show_result').should('exist')
            cy.get('#learn').click({ force: true })
            cy.get('#learn').should('exist').contains('Retry')
            cy.contains('Lesson').should('exist')
            cy.get('#ans-alert').should('exist')
            cy.questionNavigation();
            StudentPage.endTest()
        })
    })
})