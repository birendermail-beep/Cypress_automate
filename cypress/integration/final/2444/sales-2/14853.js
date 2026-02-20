/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14853
@story_name: invoice_download
@path: final/Admin
@test_case_name: invoice_download.js
@description: open a invoice report and print preview
@test_steps:
^download the record
-goto to the link: https://demo.ucertify.com:9040/admin/
- click on manage orderbook
- click on report and select invoice
- click on settings button 
- click on print preview
-click on save as select DOC or PDF

@test_data: n/a

@result: open a invoice report and print preview
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("open a invoice report and print preview", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.get(".chapter-link").contains("Manage OrderBook").click({ force: true });
            cy.get('#report_dropdown_btn').click();
            cy.get(".dropdown-item").contains("Invoice").click();
            cy.visit(data.url + "/admin/admin_orderbook_new.php?action=getinvoice&email=ljalford@waketech.edu&transaction_guid=01DMH&transaction_type=v");
        })
        cy.get('#dropdownMenu1').click();
        cy.get('.print_invoice > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click({ force: true });
    });
});