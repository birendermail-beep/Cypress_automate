/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14976
@story_name: comment_modal_body
@path: final/Educator
@test_case_name: comment_modal_body.js
@description: comment_modal_body
@test_steps:
^Todo list 
-goto the link: https://demo.ucertify.com:9040/
-click on my projects
-choose a course and click on author
-click on todo list
-click on comments
-select any title click on setting icon
-click on open

@test_data: n/a

@result: show the comment list
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    //comment_body_01
    it("show the comment list", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy="mylibrary"]').click({ force: true })
            cy.get('[data-cy=project]').click({ force: true })
            cy.get('[data-cy=author]').eq(6).click({ force: true })
            cy.visit(data.url + '/editor/?action=edit&no_header=1&content_guid=066SE&in_frame=1&from_myproject=1&react_content=1&from_educator=1&from_coverage=1&add_coverage=1&course_code=062pJ&anno_status=1')
        })
        cy.get('#editor_comment_modal_btn').click()
    });
});