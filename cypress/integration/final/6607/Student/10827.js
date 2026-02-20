/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10827
@story_name: Post Assessment in Learn Mode
@path: final/6607/Student
@test_case_name: Post Assessment in Learn Mode.js  
@description: N/A
@test_steps:
^Navigate to the questions
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Click on Post Assessment
-learn mode and click on submit button and navigate the question

^Retry button should appear
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Click on Post Assessment
-After clicking Submit button the button should change to retry and the Explanation will come

^Correct and incorrect message should display
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Click on Post Assessment
-And also if choose the correct or incorrect answer the message should come accordingly 

@test_data: n/a
@result: open the learn mode in post assessment area
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('This will test the post assessment', function() {
    /** This is test the Post Assessment on Learn Mode */
    it('Post Assessment on Learn Mode', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy=post_assesment]').click({ force: true }).then(() => {
            cy.get('[data-cy="test_form"]').then(($text) => {
                if ($text.text().includes('Last test was not completed. Do you want to continue?')) {
                    cy.get('#terminate_test_pre').click()
                    cy.get('[data-cy=terminate_current_test]').contains('Yes').click({ force: true })
                }
            })
        })
        cy.get('#learn_mode').click({ force: true })
        cy.get('#show_result').should('exist')
        cy.get('#learn').should('exist').contains('Submit').click({ force: true }).then(() => {
            // cy.get('#ans-alert').then(($ansText) => {
            //     if (!(($ansText.text().trim() == "Incorrect") || ($ansText.text().trim() == "Correct"))) {
            //         throw new Error('The Submit of Lean Mode is not working')
            //     }
            // })
            cy.get('#learn').contains('Retry')
        })
        cy.get('div[intro-id="timer"]').should('not.exist')
        cy.questionNavigation();
        StudentPage.endTest()
    })
})