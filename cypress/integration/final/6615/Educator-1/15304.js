/*
@author:Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 15304
@story_name: Check box infront of student name
@path: final/6615
@test_case_name: Check box infront of student name
@description: N/A   
@test_steps:
^test case of ebook slide
-visit the website
-login into page
-Open the my library.
-click on manage student
-check the checkboxes

@test_data:N/A  
@result:check the chechboxes
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.7.8.1 Check the use of Check box infront of student name', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('[data-cy=all_student]').click({ force: true })
        cy.wait(10000)
        cy.get('#userlist > .theader > .always_show > .all_selector > .custom_checkbox_new > .check_mark_custom').click({ force: true })
    })
});