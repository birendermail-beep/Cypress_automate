/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15196
@story_name: icomoon
@path: final/Misc
@test_case_name: icomoon
@description: N/A   
@test_steps: 
^icomoon
-visit the website
-login to website
-visit the utils area
-click on Icomoon

@test_data: n/a
@result: icomoon will display
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("Icomoon area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
        })
        cy.get(".chapter-link").contains("Icomoon").click();
    });
});