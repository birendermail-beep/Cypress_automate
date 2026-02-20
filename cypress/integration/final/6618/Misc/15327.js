/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15327
@story_name: canteen pending payment
@path: final/Misc
@test_case_name: canteen pending payment
@description: N/A   
@test_steps: 
^canteen_pending_payment
-visit the website
-login to website
-visit the utils area
-click on Canteen Application
-click on see order history
-click on pending item

@test_data: n/a
@result: canteen pending payment 
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("pending payment in utils area", function() {
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