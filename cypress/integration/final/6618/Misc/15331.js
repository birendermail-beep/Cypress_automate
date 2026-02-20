/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15331
@story_name: content version
@path: final/Misc
@test_case_name: content version
@description: N/A   
@test_steps: 
^content_version
-visit the website
-login to website
-visit the utils area
-click on Content Version
-type content guid
-click on search

@test_data: n/a
@result: content version open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
        })
    })
    it("Content Version in utils area", function() {
        cy.get(".chapter-link").contains("Content Version").click();
        cy.get('#content_guid').type("05nn");
        cy.get('.offset-md-3 > .btn').click();
    });
    it("Content Version in utils area", function() {
        cy.get(".chapter-link").contains("Content Version").click();
        cy.get('#content_guid').type("05nnK");
        cy.get('.offset-md-3 > .btn').click();
    });
});