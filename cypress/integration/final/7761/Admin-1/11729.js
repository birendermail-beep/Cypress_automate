/*
@author: Anirudh Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11729
@story_name: Access Course Outline
@path: final/7761
@test_case_name: Access Course Outline.js
@description: 
@test_steps: 
^Manage- courses-course Outline
-Click on Manage
-Select courses
-Select a Particular course
-Click on the action button and select course outline."

@test_data: n/a
@result: Administrator should be able to see the course outine of the courses
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Course Outline Option.", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsAS()
        cy.get('[data-cy=course_outline]').eq(0)
            .should('have.attr', 'href')
    });
})