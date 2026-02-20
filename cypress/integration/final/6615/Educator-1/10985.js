/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10985
@story_name: Sorting in Student Name
@path: final/6615
@test_case_name: Sorting in Student Name
@description: n/a
@test_steps:
^Sorting option for Student Name in ascending order
-Select the ascending order for Student Name

^Sorting option for Student Name in descending order
-Select the descending order for Student Name

@test_data:N/A
@result: List is sorted Section-wise in ascending order
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.8.1.2 Click on Open button for a section in List view; ', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('#active_table > thead > tr > :nth-child(1)').click()
    })
});