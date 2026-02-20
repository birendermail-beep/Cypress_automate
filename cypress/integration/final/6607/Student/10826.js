/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10826
@story_name: Post Assessment in Test Mode
@path: final/6607/Student
@test_case_name: Post Assessment in Test Mode.js
@description: open post assessment test and perform perform test in all mode
@test_steps:
^Open Post-assessment
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Click on Post Assessment
-click on test mode

^Navigate to the questions
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Click on Post Assessment
-click on test mode
-perform the navigation and end the test

@test_data: n/a
@result: open the test mode in post assessment area
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('This will test the post assessment', function() {
    /** This is test the Post Assessment on the Test Mode */
    it('Post Assessment on Test Mode', function() {
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
                    cy.get('[data-cy=terminate_currecnt_test]').click()
                }
            })
        })
        cy.get('#test_mode').click()
        cy.questionNavigation();
        StudentPage.endTest()
    })
})