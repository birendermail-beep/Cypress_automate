/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15196
@story_name: compare file
@path: final/Misc
@test_case_name: compare file
@description: N/A   
@Test Steps: 
^compare_file
-visit the website
-login to website
-visit the utils area
-click on compare file

@test_data: n/a
@result: compare file open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("Compare File area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
        })
        cy.get(".chapter-link").contains("Compare File").click();
    });
});