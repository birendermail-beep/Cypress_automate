/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11556
@story_name: Admin Orderbook
@path: final/7761/orderbook
@test_case_name: Admin Orderbook.js
@description: It will login and test admin orderbook area.
@test_steps:
^To search your order in orderbook we use correct refrence number to search 
-Go to https://www.ucertify.com/admin/admin_orderbook_new.php
-Write correct refrence number
-After input refrence number , click on search icon or enter button

^To search your order in orderbook we use incorrect refrence number to search 
1- Write incorrect refrence number
2- After input refrence number , click on search icon or enter button

^To search your order in orderbook we use blank refrence number to search 
1-Blank refrence box
2- After input refrence number , click on search icon or enter button

@test_data: 
-1- e-20190531072252
-1- e-20190531072256

@result: Product should be visible whose refrence number is: e-20190531072252 , Product should not visible, input type should ask for refrence number
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Admin Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitAdminPanel()
        AdminArea.visitOrderbook()
    })
    it("Product should be visible", function() {
        cy.fixture('global').then(data => {
            cy.get('#processor_transaction_number1').type(data.gradebook_refrence);
        })
        cy.get("[data-cy='submit_button']").click();
        cy.fixture('global').then(data => {
            cy.get('[data-cy="reference_number"]')
                .contains(data.gradebook_refrence)
                .should("be.visible");
        })
    });

    it("Product should not visible", function() {
        cy.fixture('global').then(data => {
            cy.get('#processor_transaction_number1').type(data.gradebook_wrong);
        })
        cy.get("[data-cy='submit_button']").click();
    });

    it("input type Blank refrence box", function() {
        cy.get("[data-cy='submit_button']").click();
    });
});