/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327(10478)
@story_id: 11021
@story_name: Access Annotation from Side Pane
@path: final/6607/Student
@test_case_name: Access Annotation from Side Pane.js
@description:
@test_steps:
^Check annotation
-you can also see the annotation by click annotation icon in upper TOC list

@test_data: n/a
@result: search result will be display
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Toc book', function() {
    it('Check annotation', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitCourse(data.url)

        })
        cy.get('[data-cy="chapters"]').click({ force: true })
        cy.get('[data-cy=annotation_tab]').contains('Annotation').click({ force: true })
    })
})