/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10986
@story_name: Sotring with Readiness Level
@path: final/6615
@test_case_name: Sotring with Readiness Level
@description: n/a
@test_steps:
^Sorting option for Readiness level in ascending order
-Select the ascending order for Readiness level

^Sorting option for Readiness level in descending order
-Select the descending order for Readiness level

@test_data:N/A
@result: Sorting option for Readiness level
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('Sotring with Readiness Level', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('#active_table > thead > tr > :nth-child(1)').click()
    })
});