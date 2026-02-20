/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14855
@story_name: order_enrollment_report
@path: final/Admin
@test_case_name: order_enrollment_report.js
@description: replace the voucher code 
@test_steps:
^replace the voucher code 
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on others tab.
-click on manage vouchers
-click on Actions
-click on replace vouchers
-enter the voucher code
-enter the comment
-click on next

@test_data: 
-voucher code : 03Yfv,02Cij,05tzy,03oiL

@result: replace the voucher code 
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("replace the voucher code in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.get('#others_tab').click();
            cy.get(".chapter-link").contains("Manage Vouchers").click({ force: true });
            cy.get('.form-group > .dropdown > .btn-light').click();
            cy.visit(data.url + "/admin/admin_voucher.php?action=reset_voucher_code");
        })
        cy.get('#voucher_code').type("03Yfv,02Cij,05tzy,03oiL");
        cy.get('#comment_voucher').type("testing");
        cy.get('#parse_next').click();
    });
});