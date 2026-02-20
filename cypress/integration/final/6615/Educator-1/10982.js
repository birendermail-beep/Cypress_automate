/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10982
@story_name: Archived Section
@path: final/6615
@test_case_name: Archived Section
@description: n/a
@test_steps:
^Check the option of "Show archived sections"
-Click on the option of "Show archived sections"

@test_data:N/A
@result: Check the option of "Show archived sections"
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.7.3 Check the option of "Show archived sections"', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('[data-cy=all_student]').click({ force: true })
        cy.wait(5000)
        cy.get('.pointer').contains("Show archived sections").click({ force: true })
    })
});