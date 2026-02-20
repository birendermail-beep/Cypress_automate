/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10981
@story_name: Load Section
@path: final/6615
@test_case_name: Load Section
@description: n/a
@test_steps:
^Check the "Load section" option
-Click on "All Students" tab";        
-Click on the required Section;       
-Click the "Load section" option

@test_data:N/A
@result: Check All Student List
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {

    it('1.7.2 Check the "Load section" option', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('[data-cy=all_student]').click({ force: true })
        cy.wait(6000)
        cy.get('.list-group > :nth-child(1)').click()
        cy.get('.popover-body > .btn').click({ force: true })
    })
});