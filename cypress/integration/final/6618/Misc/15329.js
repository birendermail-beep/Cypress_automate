/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15329
@story_name: canteen summarize order
@path: final/Misc
@test_case_name: canteen summarize order
@description: N/A   
@test_steps: 
^canteen_summarize_order
-visit the website
-login to website
-visit the utils admin area area
-click on order detail

@test_data: n/a
@result: canteen_summarize_order open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("order detail in utils area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
            cy.get(".chapter-link").contains("Canteen Application").click();
            cy.get(':nth-child(1) > .row > .product_info > .canteen_theme_font').click();
            cy.get('#button_order_execute').click();
            cy.get('#checkout_button').click();
            cy.visit(data.url + "/utils/canteen_application/admin.php");
        })
        cy.get('.col-lg-10 > .nav > :nth-child(2) > a').click();
        //cy.get('#accordions > .panel > .panel-heading > .panel-title > a').click();
    });
});