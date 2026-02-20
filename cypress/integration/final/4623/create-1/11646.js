/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10433
@story_id: 
@story_name: Player Tag
@path: final/Create
@test_case_name: Player Tag.js
@description: 
@test_steps: 
^To test the player tags
-Open Author App
-Click on Content Diagnostic Tile
-Click on open in Player Diagnostic
-Select Level and submit

@test_data:
-CRN: CAS-003,WGU-D08,70-741,70-742

@result: The video Diagostic shoudl open and show table if videos exist
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
            cy.visit(data.url + "/ext/content_diagnostic/?action=report&report=vd&course_code=03Hy5&level=1");
        })
    })
})