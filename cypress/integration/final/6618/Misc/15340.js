/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15340
@story_name: order history
@path: final/Misc
@test_case_name: order history
@description: N/A   
@test_steps: 
^order_history
-visit the website
-login to website
-visit the utils area
-click Canteen Application
-click on See order history

@test_data: n/a
@result: order history show
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("order history area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
        })
        cy.get(".chapter-link").contains("Canteen Application").click();
        cy.get('.canteen_user_menu > .btn').click();
        cy.get(':nth-child(2) > .nav-link').click();
    });
});