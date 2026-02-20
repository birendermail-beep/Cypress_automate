/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15333
@story_name: create vtt
@path: final/Misc
@test_case_name: create vtt
@description: N/A   
@test_steps: 
^create_vtt
-visit the website
-login to website
-visit the utils area (url + '/utils/video_plus/create_transcript.php')
-type video link
-click upload

@test_data: n/a
@result: create vtt open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("create vtt area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/video_plus/create_transcript.php");
        })
        cy.get('#video_link').clear({ force: true }).type('https://www.jigyaasa.info/?func=video&type=ebook', { force: true });
        cy.get('#file_upload').click({ force: true });
    });
});