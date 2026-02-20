/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15337
@story_name: image_review
@path: final/Misc
@test_case_name: image_review
@description: N/A   
@test_steps: 
^image_review
-visit the website
-login to website
-visit the utils area
-All Images of a Course & review Alt info
-type crn
-visit the (url + "/utils/btest.php?action=get_image_list&crn=98-366-2018&chapterwise=0&print=0")

@test_data: n/a
@result: All Images of a Course & review Alt info
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("All Images of a Course & review Alt info area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
            cy.get(".chapter-link").contains("All Images of a Course & review Alt info").click();
            cy.get('#crn').type("98-366-2018");
            cy.visit(data.url + "/utils/btest.php?action=get_image_list&crn=98-366-2018&chapterwise=0&print=0");
        })
    });
});