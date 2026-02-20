/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10433
@story_id: 
@story_name:Item Diagnostic
@path: final/Create
@test_case_name:Item Diagnostic.js
@description: 
@test_steps: 
^TO test the MCQ types Questions
-Open Author App
-Click on Content Diagnostic Tile
-Click on open in MCQ Diagnostic

^To get the SMQ type of Questions and Diagnostic
-Open Author App
-Click on Content Diagnostic Tile
-Click on open in SMQs

^All Item related issues in course when course is selected
-Open module https://www.ucertify.com/ext/content_diagnostic/

-select course as Diagnostic testing.
-Click on Item option open button.
-A new page will open.

^Advanced Error page
-Click on advanced button in top right part
-Advanced errors page will open

^Detailed page
-Click on detailed button in top right part
-Detailed page will open

@test_data:
-CRN: CAS-003,WGU-D08,70-741,70-742

@result: The Diagnostic should show.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('content diagnostic', function() {
    it('test the content diagnostic page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=get_course_list&show=courses');
            cy.get('[intro-id="myproject"]').click();
            cy.visit(data.url + "/educator/project/index.php?author_course=1&func=load_course&course=tech-support-2018&class_code=04J83");
            cy.visit(data.url + "/ext/content_diagnostic/?action=report&report=pd&course_code=03Hy5&level=1");
        })
    })
})