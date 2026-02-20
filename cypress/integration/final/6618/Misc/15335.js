/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15196
@story_name: email canteen order success
@path: final/Misc
@test_case_name: email canteen order success
@description: N/A   
@Test Steps: 
^email_canteen_order_success
-visit the website
-login to website
-visit the utils area
-click on Canteen Application
-check any item
-click on order now
-click on checkout

@test_data: n/a
@result: email canteen order success
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("order success in utils area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
        })
        cy.get(".chapter-link").contains("Canteen Application").click();
        cy.get(':nth-child(1) > .row > .product_info > .canteen_theme_font').click();
        cy.get('#button_order_execute').click();
    });
});