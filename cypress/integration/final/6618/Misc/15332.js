/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15332
@story_name: course assets info
@path: final/Misc
@test_case_name: course assets info
@description: N/A   
@test_steps: 
^course_assets_info
-visit the website
-login to website
-visit the utils area
-click on Course Assets Info

@test_data: n/a
@result: course assets info
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("Course Assets Info area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
        })
        cy.get(".chapter-link").contains("Course Assets Info").click();
    });
});