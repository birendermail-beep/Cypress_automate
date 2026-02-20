/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327(10478)
@story_id: 11022
@story_name: Access Video from Side Pane
@path: final/6607/Student
@test_case_name: Access Video from Side Pane.js
@description:
@test_steps:
^Check video
-you can also see the video by click video icon in upper TOC list

@test_data: n/a
@result: search result will be display
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Toc book', function() {
    //chapter.item_list4
    it('you can also see the video by click video icon in upper TOC list', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitCourse(data.url)
        })
        cy.get('[data-cy="chapters"]').click({ force: true })
        cy.get('[data-cy="toc_chapters"]').eq(0).click({ force: true })
        cy.get('#btntxt').click({ force: true })
        cy.get('[intro-id="videos"]').contains('Videos').click({ force: true })
    })
})