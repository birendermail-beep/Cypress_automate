/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10987
@story_name: Sorting with Start Days Passed
@path: final/6615
@test_case_name: Sorting with Start Days Passed
@description: n/a
@test_steps:
^Sorting option for Start days passed in ascending order
-Select the ascending order for Start days passed

^Sorting option for Start days passed in descending order
-Select the descending order for Start days passed

@test_data:N/A
@result: Sorting with Start Days Passed
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('Sorting with Start Days Passed', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('#active_table > thead > tr > :nth-child(1)').click()
    })
});