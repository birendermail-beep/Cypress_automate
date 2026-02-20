/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10864
@story_name: Search Assessment
@path: final\6615
@test_case_name: Search Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ Search bar
-Type in the keyword to search for the required assessment

@test_data: n/a
@result: Assessment tab/ Search bar
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.11.7.4 Assessment tab/ Search bar', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('#search_obj').clear({ force: true }).type('Test', { force: true }).blur();
    })
});