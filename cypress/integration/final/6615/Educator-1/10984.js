/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 
@story_name: Sorting in Section List
@path: final/6615
@test_case_name: Sorting in Section List
@description: n/a
@test_steps:
^Sorting option for Section List in ascending order
-Select the ascending order for Section Name

^Sorting option for Section List in descending order
-Select the descending order for Section Name

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
        cy.get('th').contains('Section').click({ force: true })
    })
});