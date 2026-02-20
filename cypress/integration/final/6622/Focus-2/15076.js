/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@Story_Id: 15076
@story_name: attendance_monthly
@path: final/Dump_Test_Automation
@Test_Case_Name: attendance_monthly.js
@description: Go to the annotation listing page
@test_steps: 
^Test case of annotated files
- visit on website
- Go to the Focus area
- visit in this link "/focus/index.php?func=focus_attendance&action=focus_monthly_report"
@test_data: N/A
@result: Successfully open the attendence page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus area', function() {

    it('Show the attendance page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus/index.php?func=focus_attendance&action=focus_monthly_report');
        })
    })
})