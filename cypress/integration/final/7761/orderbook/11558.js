/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11558
@story_name: Admin_orderbook_report_options
@path: final/7761/orderbook
@test_case_name: Admin_orderbook_report_options.js
@decription: 
@test_steps:
^Report button orderbook option
-Click on orderbook option

^Report button invoice option
-Click on invoice option

@test_data: n/a

@result: -Record of current date should be display -Invoice details of customers will be display
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
    it("To display data created by today", function() {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy=report_option]').eq(0).click();
        cy.get('[data-cy="reference_number"]').should("be.visible");
    });

    it("To display total invoice details", function() {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get(".dropdown-item").contains("Invoice").click();
        cy.get('[data-cy="reference_number"]').should("be.visible");
    });
});