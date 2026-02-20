/*
@author: Sundaram Tripathi
@master_project_id: 6607
@phase_id: 
@Story_Id: 15251
@story_name: revision track history
@path: final/Dump_Test_Automation
@Test_Case_Name:  revision track history
@description: Open tha page content track changes
@test_steps: 

^Test case revision track history
- visit on website
- Go to my library
- Click on the "My Project".
- Select any course and click on the "Author" button.
- Go to this url "/educator/project/edit/track_report.php"

@test_data: N/A
@result:
- Successfully open the content track page 
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Educator Area', function() {
    it('Revision Track History', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
            StudentPage.loadCourse();
            cy.visit(data.url + '/educator/project/edit/track_report.php');
        })
    })
})