/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: 
@story_id: 15310
@story_name: video_plus_editor
@path: final/Misc
@test_case_name: video_plus_editor
@description: 
@Test Steps: 
^video plus editor area
-Login the website
-visit jigyaasa.info/utils
-Click on action dropdown button
-Click on Add VTT button

^VTT parser area
-Login in website
-go to jigyaasa.info/utils
-Click on VTT parser
-type JIGYAASA_CONTENT_STREAM + 70-461-videos/Create%20a%20table.mp4
-Click on search button
-Click on action button 
-CLick on edit in editor button.

@test_data: n/a
@result: VTT parser will open successfully.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("video plus editor area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/vtt_parser.php?search_text="+JIGYAASA_CONTENT_STREAM+"70-461-videos%2FCreate%2520a%2520table.mp4&func=search");
        })
        cy.get(':nth-child(1) > .actions > .dropdown > .btn').click({ force: true });
        cy.get(':nth-child(1) > .actions > .dropdown > .dropdown-menu > :nth-child(1) > .view_vtt').click();
    });
    it("VTT parser area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
        })
        cy.get(".chapter-link").contains("VTT Parser").click();
        cy.get('.input-group > .form-control').type(JIGYAASA_CONTENT_STREAM + "70-461-videos/Create%20a%20table.mp4");
        cy.get('.icomoon-search-3').click();
        cy.get(':nth-child(3) > .actions > .dropdown > .btn').click();
        cy.get(':nth-child(3) > .actions > .dropdown > .dropdown-menu > :nth-child(2) > .edit_in_editor').click();
    });
});