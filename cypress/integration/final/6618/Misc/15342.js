/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15342
@story_name: playground
@path: final/Misc
@test_case_name: playground
@description: N/A   
@test_steps: 
^playground
-visit the website
-login to website
-visit the utils
-click on playground enter the api key and passphase
-click on authenticate
-click on api

@test_data: n/a
@result: playground will display
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("Playground in utils area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
            cy.get(".chapter-link").contains("Playground").click();
            cy.get('#api_key_text').type(data.api_key, {force: true});
            cy.get('#reviewer_pass_phase').type(data.pass_phase);
        })
        cy.get('#authenticate_me').click();
        cy.get(':nth-child(2) > .api_toggle').click();
        cy.get(".api_name_list").contains("catalog_bundle_get").click({force: true});
    });
});