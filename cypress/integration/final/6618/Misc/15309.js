/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15309
@story_name: vtt_parser
@path: final/Misc
@test_case_name: vtt_parser.js
@description: N/A   
@Test Steps: 
^VTT parser area
-go to url jigyaasa.info
-Login the website
-visit jigyaasa.info/utils
-Click on VTT parser 
-type https://player.vimeo.com/external/377511542.hd.mp4?s=680549b25764d03d46e95b42ad69db9b981407ea&profile_id=174
-Click on search button. 

@test_data: n/a
@result: VTT Parser area will open successfully.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("VTT parser area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
        })
        cy.get(".chapter-link").contains("VTT Parser").click();
        cy.get('.input-group > .form-control').type("https://player.vimeo.com/external/377511542.hd.mp4?s=680549b25764d03d46e95b42ad69db9b981407ea&profile_id=174");
        cy.get('.icomoon-search-3').click();
    });
});