/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327(10478)
@story_id: 11023
@story_name: Access Glossary from Side Pane
@path: final/6607/Student
@test_case_name: Access Glossary from Side Pane.js
@description:
@test_steps:
^Check glossary
-you can also see the glossary by click glossary icon in upper TOC list

@test_data: n/a
@result: search result will be display
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Toc book', function() {
    //chapter.item_list5
    it('you can also see the glossary by click glossary icon in upper TOC list', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitCourse(data.url)
        })
        cy.get('[data-cy="chapters"]').click({ force: true })
        cy.get('[data-cy="toc_chapters"]').eq(0).click({ force: true })
        cy.get('#btntxt').click({ force: true })
        cy.wait(5000)
        cy.get('[intro-id="glossary"]').contains('Glossary').click({ force: true })
    })
})