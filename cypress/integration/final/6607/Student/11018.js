/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11018
@story_name: Item List in Tabs
@path: final/6607/Student
@test_case_name: Item List in Tabs.js
@description:
@test_steps:
^Check attempted, unattempted questions
-click on attempted tabs and attempted and all tab then item list will be reflected

@test_data: n/a
@result: test area will be open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('question.itemList1', function() {
    beforeEach('This will open exercise', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
    })
    it('click on attempted tabs and attempted and all tab then item list will be reflected', function() {
            cy.get('[data-cy="practice_tests"]').click({ force: true })
            cy.get('[data-cy="test_tests"]').eq(0).click()
            cy.get('[data-cy=test_mode]').click({ force: true })
            cy.get('#userans-A').click({ force: true })
            cy.questionNavigation()
            cy.get('#btntxt').click({ force: true })
            cy.get('#attempted').click({ force: true })
            cy.get('#unattempted').click({ force: true })
            cy.get('#show_result').click({ force: true })
            //Pankaj:ucauto 
            cy.wait(5000);
            cy.get('#btn-confirmed').click({ force: true })
        })
        /** Test the Item List in Question Area*/
    it.only('Item List in Question Area', function() {
        cy.get('[data-cy=chapters]').click({ force: true }).then(() => {
            cy.get('#ebook_toc').should('exist')
        })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=custom_test&parent_guid=02nHQ")
        })
        cy.get('#test_form').then(($text) => {
            if ($text.text().includes('Last test was not completed. Do you want to continue?')) {
                cy.get('#terminate_test_pre').click()
                cy.get('[data-cy=terminate_current_test]').contains('Yes').click({ force: true })
            }
        })
        cy.get('#test_mode').click()
        cy.get('#userans-D').check()
        cy.get('#next').click().then(() => {
            cy.wait(2500)
        })
        cy.get('#userans-A').check()
        cy.get('#btntxt').click().then(() => {
            cy.wait(3000)
            cy.get('#ebook_toc').should('be.visible')
        })

        //Pankaj:ucauto 
        // cy.get('[intro-id="bookmark"]').eq(1).click().then(() => {
        //     cy.get('div.popover-body.popover-content').should('be.visible').within(() => {
        //         cy.get('div.btn-group.bookmark-toggle > button:contains("Yes")').click()
        //         cy.get('div.btn-group.rating-toggle > button:contains("Yes")').click()
        //     })
        // })
        // cy.get('[intro-id="bookmark"]').eq(1).click()

        // cy.get('[intro-id="bookmark"]').eq(3).click().then(() => {
        //     cy.get('div.popover-body.popover-content').should('be.visible').within(() => {
        //         cy.get('div.btn-group.bookmark-toggle > button:contains("Yes")').click()
        //         cy.get('div.btn-group.rating-toggle > button:contains("Yes")').click()
        //     })
        // })

        cy.get('#attempted').click().then(() => {
            cy.get('li > .answer > span:contains("Attempted")').should('be.visible')
            cy.get('li > .answer > span:contains("Unattempted")').should('be.hidden')
        })

        cy.get('#unattempted').click().then(() => {
            cy.get('li > .answer > span:contains("Unattempted")').should('be.visible')
            cy.get('li > .answer > span:contains("Attempted")').should('be.hidden')
        })

        // cy.get('.dot-drop.bookmarked.pointer').click().then(() => {
        //     cy.get('#bookmarked').click()
        //     cy.get('.dot-drop.bookmarked.pointer').click()
        //     cy.get('div[bookmark="1"]').should('be.visible')
        // })

        // cy.get('.dot-drop.rating.pointer').click().then(() => {
        //     cy.get('[filter_class=".rating"]').click()
        //     cy.get('.dot-drop.rating.pointer').click()
        //     cy.get('div[rating="1"]').should('be.visible')
        // })
    })
})