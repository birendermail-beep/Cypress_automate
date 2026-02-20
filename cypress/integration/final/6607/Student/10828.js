/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10828
@story_name: Access Post Assessment in Review Mode
@path: final/6607/Student
@test_case_name: Access Post Assessment in Review Mode.js
@description: n/a
@test_steps:
^Navigate to the questions
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-click on post assessment
-click on review mode
-review mode and navigate the question

^Navigate to the questions with item list
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-click on post assessment
-click on review mode
-click on item list and navigate another question

^Check click on Lesson in post assessment with review mode1 
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-click on post assessment
-click on review mode
-click on lesson

^Check click on Lesson in post assessment with review mode2
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-click on post assessment
-click on review mode
-The lesson link text should be same as opened lesson

^Check click on objective in post assessment with review mode1 
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook   
-click on post assessment
-click on review mode
-click on objective

^Check click on objective in post assessment with review mode2 
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-click on post assessment
-click on review mode
-The objective link text should be same as opened objective

^Check timer in review mode
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-click on post assessment
-click on review mode
-In Review mode timer should not displayed

^Go back button
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-click on post assessment
-click on review mode
-On click of Go Back button it should go back

@test_data: n/a
@result: open the review mode in post assessment area
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('This will test the post assessment', function() {
    /** This is test the Post Assessment on Review Mode */
    it('Post Assessment on Review Mode', function() {
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
        cy.get('#review_mode').click({ force: true })
        cy.get('div[intro-id="timer]"').should('not.exist')
        cy.get('#show_result').should('not.exist')
        cy.get('a[intro-id="global_goback"]').contains('Go Back').should('exist')
        cy.get('#learn').should('not.exist')
        cy.get('#item_explanation').should('exist')
        cy.questionNavigation();
        cy.url().then(() => {
            cy.get('.pb-xl > :nth-child(2) > .outline1').then((lesson) => {
                let lessonName;
                cy.get(lesson).then((text) => {
                    lessonName = text.text().trim()
                })
                cy.get(lesson).should('have.attr', 'href').then((lessonURL) => {
                    cy.visit(lessonURL)
                })
            })
        })
    })
})