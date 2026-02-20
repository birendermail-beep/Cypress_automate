/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14886
@story_name: Lab Player
@path: final/6607/Student
@test_case_name: Lab Player
@description:
@test_steps:
^Lab Player
-Open the My library.
-Open the following course.(https://www.ucertify.com/?func=load_course&course=jbl-nursing).
-Open the chapter and lesson.(Chapter and lesson 1).
-Click on the video.

@test_data: n/a
@result: It will open the lab player.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Lab player caption', function() {

    it('Opening lab player caption page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course=jbl-nursing");
            cy.get('[data-cy=chapters]').click()
            cy.visit(data.url + "/lab_player.php?test_session_id=0&content_guid=undefined&lab_code=EBP_MODULE_UCERTIFY/EBP_Module_1_WGU_DV_4_9/story_html5.html&type=lab&sub_type=scorm&get_guid=02SHr&lab_title=What%20is%20EBP%3F&SCOInst=1&scorm_caption_id=03CJ2&is_frame=1");
        })
    })
})