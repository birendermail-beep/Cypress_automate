/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 11024
@story_id: 10989
@story_name: Set Section of Student
@path: final/6615
@test_case_name: Set Section of Student.js
@description: Set Section of Student
@test_steps:
^Checking the use of Set Section option
-Click on the Action drop-down;
-Select Set Section option;
-Select the required section available in the list;
-Click on Save button;     

@test_data: n/a

@result: No section is available in the section list to select
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.7.9.2 Checking the use of Set Section option', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('.all_student').click({ force: true })
        cy.wait(10000)
        cy.get(':nth-child(7) > .dropdown > .btn').eq(0).click()
        cy.get('.dropdown-menu.dropdown-menu-right.show > li').eq(1).click()
        cy.wait(6000)
        cy.get('#select2-class_code-container').click({ force: true })
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').clear({ force: true }).type('abc', { force: true })
        cy.get('#modal_set_user_class > .modal-dialog > .modal-content > .modal-body').click({ force: true })
        cy.get('#set_section_btn').click({ force: true })
    })
});