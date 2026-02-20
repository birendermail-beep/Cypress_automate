/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15325
@story_name: canteen order cancel
@path: final/Misc
@test_case_name: canteen order cancel
@description: N/A   
@test_steps: 
^canteen_order_cancel
-visit the website
-login to website
-visit the utils area
-click on canteen Application
-check any item and click on order now
-click on checkout
-click on cancel the order

@test_data: n/a
@result: canteen cancel open 
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("order cancel in utils area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
        })
        cy.get(".chapter-link").contains("Canteen Application").click();
        cy.get(':nth-child(1) > .row > .product_info > .canteen_theme_font').click();
        cy.get('#button_order_execute').click();
        cy.get('#checkout_button').click();
        cy.get(':nth-child(3) > .middle > .dropdown > #btn_set').click();
        cy.get(':nth-child(3) > .middle > .dropdown > .dropdown-menu > :nth-child(2) > .update_item_info').click();
        cy.get('#btn-confirmed').click();
    });
});