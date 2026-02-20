/*
@author: Sundaram Tripathi
@master_project_id: 6607
@phase_id: 
@Story_Id: 15256
@story_name: scene_upload
@path: final/Dump_Test_Automation
@Test_Case_Name: scene_upload.js
@description: Scene display select any one
@test_steps: 

^Test case scene upload
- visit on website
- Go to my library
- Click on the "My Project"
- Select any course and click on the "Author" button
- visit on this link "/educator/project/scene_upload.php"
- Successfully open the upload scene page

@test_data: N/A
@result:
- Successfully show the scenes pge
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Educator', function() {
    it('Export the Create Plan', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
            StudentPage.loadCourse();
            cy.visit(data.url + '/utils/scene_upload.php');
        })

    })
})