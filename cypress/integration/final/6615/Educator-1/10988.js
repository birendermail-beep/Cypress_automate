/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 
@story_name: Sorting with Last Login
@path: final/6615
@test_case_name: Sorting with Last Login
@description: n/a
@test_steps:

^Sorting option for Last Login in ascending order
-Select the ascending order for Last Login

^Sorting option for Last Login in descending order
-Select the descending order for Last Login

@test_data:N/A
@result: Sorting with Last Login
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('Sorting with Last Login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('#active_table > thead > tr > :nth-child(1)').click()
    })
});