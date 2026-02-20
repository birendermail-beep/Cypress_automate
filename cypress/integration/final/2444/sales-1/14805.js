/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14805
@story_name: admin_course_select_modal
@path: final/Admin
@test_case_name: admin_course_select_modal.js
@description:
@test_steps:
^open a modal box then select course
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on manage orderbook
-click on Add button 
-select invoice & select on Receivable then click on continue
- click on Add course
-click on save

@test_data: n/a

@result: open a modal box then select course
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe("admin page testing", function() {
    it("order book in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.get(".chapter-link").contains("Manage OrderBook").click({ force: true });
            cy.get('#show_ordermodal_btn').click();
            cy.get('#invoice_type').click();
            cy.get('#invoice_receivable_radio').click();
            cy.get('#btn-update').visit(data.url + "/admin/admin_orderbook_new.php?transaction_type=v&dr_cr=1&action=add&old_order=&secondary_order=&from_transaction_modal=1");
        })
        cy.get('#add_course').click();
        cy.wait(10000);
        cy.get('[data-cy=select_other]').select('Bundle', { force: true })
        cy.get('[data-cy=search_box]').type('Archana')
        cy.get('[data-cy=search_btn]').click()
        cy.wait(10000)
        cy.contains('IQEVMWJRLDJVXYQS').click()
        cy.get('#save_admin_orderbook').click();
    });
});