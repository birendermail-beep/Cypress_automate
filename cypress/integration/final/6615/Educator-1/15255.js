/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id:
@story_name: scene upload select
@path: final/Dump_Test_Automation
@Test_Case_Name: scene upload select
@description: Scene display select any one
@test_steps: 
^Test case scene upload select
- visit on website
- Go to my library
- Go to this url "/utils/scene_upload.php"
- Successfully open the upload scene page.
- Click on the "Select" button to any scene.

@test_data: N/A
@result:
- Successfully show the selected scenes
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Educator', function() {
    beforeEach('Select a scene', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils/scene_upload.php');
        })
    })
    it('Select scene', function() {
        cy.get(':nth-child(4) > .card > .row > :nth-child(2) > .grid_btn > #choose_btn0').click({ force: true });
    })
    it('Show the list of selected scene', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/utils/scene_upload.php?selected_tab=upload&folder=552010');
        })
    })
})