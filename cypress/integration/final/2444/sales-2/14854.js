/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14854
@story_name: order_enrollment_report
@path: final/Admin
@test_case_name: order_enrollment_report.js
@description: show the list of voucher report
@test_steps:
^show the voucher report
-goto to the link: https://demo.ucertify.com:9040/admin/
- click on manage orderbook
- click on settings icon
-click on voucher report

@test_data: n/a

@result: show the voucher report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the voucher report", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.visit(data.url + "/admin/admin_orderbook_new.php?action=get_enrollment_report&transaction_guid=01DMn");
        })
    });
});