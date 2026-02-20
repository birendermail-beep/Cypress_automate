/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10885
@story_name: Design tab Reset button
@path: final/6615
@test_case_name: Design tab Reset button.js
@description: n/a
@test_steps:
^Design tab/ Reset button
-Click on Reset button;       
-Click on OK button
    
@test_data: n/a
@result: Design setting are restored to default
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.12.2.5.2 Design tab/ Reset button', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport()
        })
        cy.get('[intro-id="design"] > [data-cy=educator_design]').click()
        cy.get('#rest_subaction > .toolbar-label').click()
        cy.get('.confirm').click({ force: true })
    })
});