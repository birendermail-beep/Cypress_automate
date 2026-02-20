/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 11024
@story_id: 14967
@story_name: Click on 3 dots menu
@path: final/6615
@test_case_name: Click on 3 dots menu.js
@description: 3 dots menu of a created Section
@test_steps:
^3 dots menu of a created Section
-Click on 3 dots menu of a created Section

@test_data: 
-Click on 3 dots menu of a created Section

@result: 3 dots menu of a created Section opens up
*/

import { Navbar, login_username, login_password, LoginPage, } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('Click on 3 dots menu', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=get_course_list&show=courses')
            cy.wait(6000)
            cy.get('button').contains('Manage').click({ force: true })
        })
        cy.get('.span13 > .btn-sm > .icomoon-menu-2').click({ force: true })
    })
});