/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11557
@story_name: Admin Orderbook Advance Search
@path: final/7761/orderbook
@test_case_name: Admin Orderbook Advance Search
@description: It will login and admin orderbook advance search functionality.
@test_steps:
^Click on report button and check functionality
-Click on report button dropdown

^After clicking on  report button click on advance option 
-Click on advance button

^Click on search button without filling any data
-Click on search button without filling any text boxes

^To search in advance mode please select desire fileds
-Click on report dropdown in advance search
-Select daily orderbook option and click on load button to load details
-Enter transaction Guid
-Select order option in type dropdown
-select pending/draft option in status dropdown
-select course option in row dropdown
-Select monthaly option in Report type dropdown
-Select quantity option in values dropdown
-Select wells fargo option in Processor dropdown
-Enter correct refrence number
-Enter correct PO number
-2Enter correct user guid
-Enter your email in order by email box
-Don't check on "Remove uCertify Order"
-Select organization from org(To select organization click on search icon and select any option you want)
-Enter email in created by text box
-First time, do not click on any check box
-Enter date in tags text box
-Select have coupan code in coupan dropdown
-Enter correct coupan code
-Select have parents guids in based dropdown and enter based on data
-Enter data in custom search text box to search data 
-Click on license checkbox and select license type
-select other option from permission dropdown
-Enter correct teacher email
-Enter correct class code
-Select vendor option from product search dropdown and select vendor from below dropdown
-Select equal option from amount dropdwon and enter amount in amount text box
-Select equal option from overdues days dropdwon and enter total overdues days in text box
-Select yes option from overdues dropdown
-Enter value in Search in item desc textbox
-Select  Created/invoice date option from  order by dropdown and click on desc checkbox
-Fix limit to display data in limit
-Click on search button to search

^To search in advance mode please select desire fileds
-Click on report dropdown in advance search
-Select Pivot Report option and click on load button to load details
-Steps 4 to 9 are same as above
-Steps 15 same as above
-Select created date from created on dropdown
- same as above(step:23)
-same as above(step:27)

^To search in advance mode please select desire fileds
-Click on report dropdown in advance search 
-Select Voucher report for certifications option and click on load button to load details
-All steps are same as steps of row10

^To search in advance mode please select desire fileds
-Click on report dropdown in advance search 
-Select Weekly coupan sale option and click on load button to load details
-All steps are same as steps of row10

^To search in advance mode please select desire fileds
1- Click on report dropdown in advance search 
2- Select Weekly money request sale option and click on load button to load details
3- All steps are same as steps of row10

^To search in advance mode please select desire fileds
1- Click on report dropdown in advance search 
2- Select Weekly website sale option and click on load button to load details
3- All steps are same as steps of row10

^Advance Search reset button
1- Fill some text boxes
2- Select some options
3-Click on reset button

^Advance Search limit option
1- Select number of record to display from limit
2- Click on search button

^Advance Search cancel button
1-Click on cancel button

@test_data: n/a

@result: No Record should be Exists.
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Admin Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitAdminPanel()
        AdminArea.visitOrderbook()
    })
    it("Dropdown should open", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="report_option"]').should('be.visible')
    });

    it("Modal should be open", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="advance_modal"]').should('be.visible')
    });

    it("Click on search button without filling any data", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="advance_sbt_btn"]').click();
        cy.get('[data-cy="reference_number"]').should("be.visible");
    });

    it("load the value when click on load button", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="report_select"]').select("Daily Order Book", { force: true });
        cy.get('[data-cy="load_button"]').click();
    });

    it("To search in advance mode for Daily Order Book", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="report_select"]').select("Daily Order Book", { force: true });
        cy.get('[data-cy="load_button"]').click();
        cy.get('[data-cy="guid_textarea"]').type("019VC");
        cy.get('[data-cy="transaction_select"]').select("Order", { force: true });
        cy.get('[data-cy="transaction_status"]').select("Pending/Draft", { force: true });
        cy.get('[data-cy="data_import_select"]').select("Course", { force: true });
        cy.get('[data-cy="report_dur_select"]').select("Monthly", { force: true });
        cy.get('[data-cy="pivot_select"]').select("Quantity", { force: true });
        cy.get('[data-cy="processor_select"]').select("Wells Fargo", { force: true });
        cy.get('[data-cy="processor_transaction_select"]').type("e-2019095091052");
        cy.get('[data-cy="po_number_txt"]').type("e-2019095091052");
        cy.get('[data-cy="user_guid_text"]').type("05tzZ");
        cy.get('[data-cy="remove_ucertify_check"]').uncheck();
        cy.get('[data-cy="advance_sbt_btn"]').click();
        cy.get('[data-cy="reference_number"]')
            .contains('e-2019095091052')
            .should("be.visible");
    });

    it("To search in advance mode for Diagnostic Report", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="report_select"]').select("Diagnostic Report", { force: true });
        cy.get('[data-cy="load_button"]').click();
        cy.get('[data-cy="guid_textarea"]').type("019VC");
        cy.get('[data-cy="transaction_select"]').select("Order", { force: true });
        cy.get('[data-cy="transaction_status"]').select("Pending/Draft", { force: true });
        cy.get('[data-cy="data_import_select"]').select("Course", { force: true });
        cy.get('[data-cy="report_dur_select"]').select("Monthly", { force: true });
        cy.get('[data-cy="pivot_select"]').select("Quantity", { force: true });
        cy.get('[data-cy="processor_select"]').select("Wells Fargo", { force: true });
        cy.get('[data-cy="processor_transaction_select"]').type("e-2019095091052");
        cy.get('[data-cy="po_number_txt"]').type("e-2019095091052");
        cy.get('[data-cy="user_guid_text"]').type("05tzZ");
        cy.get('[data-cy="remove_ucertify_check"]').uncheck();
        cy.get('[data-cy="advance_sbt_btn"]').click();
        cy.get('[data-cy="report_diagnostic"]')
            .should("be.visible");
    });

    it("To search in advance mode for Pivot Report", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="report_select"]').select("Pivot Report", { force: true });
        cy.get('[data-cy="load_button"]').click();
        cy.get('[data-cy="transaction_select"]').select("Order", { force: true });
        cy.get('[data-cy="transaction_status"]').select("Pending/Draft", { force: true });
        cy.get('[data-cy="data_import_select"]').select("Course", { force: true });
        cy.get('[data-cy="report_dur_select"]').select("Monthly", { force: true });
        cy.get('[data-cy="pivot_select"]').select("Quantity", { force: true });
        cy.get('[data-cy="advance_sbt_btn"]').click();
    });

    it("To search in advance mode for report_type", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="report_select"]').select("Voucher Report for Certification Partner", {
            force: true
        });
        cy.get('[data-cy="load_button"]').click();
        cy.get('[data-cy="guid_textarea"]').type("019VC");
        cy.get('[data-cy="transaction_select"]').select("Order", { force: true });
        cy.get('[data-cy="transaction_status"]').select("Pending/Draft", { force: true });
        cy.get('[data-cy="data_import_select"]').select("Course", { force: true });
        cy.get('[data-cy="report_dur_select"]').select("Monthly", { force: true });
        cy.get('[data-cy="pivot_select"]').select("Quantity", { force: true });
        cy.get('[data-cy="processor_select"]').select("Wells Fargo", { force: true });
        cy.get('[data-cy="processor_transaction_select"]').type("e-2019095091052");
        cy.get('[data-cy="po_number_txt"]').type("e-2019095091052");
        cy.get('[data-cy="user_guid_text"]').type("05tzZ");
        cy.get('[data-cy="remove_ucertify_check"]').uncheck();
        cy.get('[data-cy="advance_sbt_btn"]').click();
    });

    it("To search in advance mode for Weekly Coupon Sale", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="report_select"]').select("Weekly Coupon Sale", { force: true });
        cy.get('[data-cy="load_button"]').click();
        cy.get('[data-cy="guid_textarea"]').type("019VC");
        cy.get('[data-cy="transaction_select"]').select("Order", { force: true });
        cy.get('[data-cy="transaction_status"]').select("Pending/Draft", { force: true });
        cy.get('[data-cy="data_import_select"]').select("Course", { force: true });
        cy.get('[data-cy="report_dur_select"]').select("Monthly", { force: true });
        cy.get('[data-cy="pivot_select"]').select("Quantity", { force: true });
        cy.get('[data-cy="processor_select"]').select("Wells Fargo", { force: true });
        cy.get('[data-cy="processor_transaction_select"]').type("e-2019095091052");
        cy.get('[data-cy="po_number_txt"]').type("e-2019095091052");
        cy.get('[data-cy="user_guid_text"]').type("05tzZ");
        cy.get('[data-cy="remove_ucertify_check"]').uncheck();
        cy.get('[data-cy="advance_sbt_btn"]').click();
    });

    it("To search in advance mode for Weekly Money Request Sale", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="report_select"]').select("Weekly Money Request Sale", { force: true });
        cy.get('[data-cy="load_button"]').click();
        cy.get('[data-cy="guid_textarea"]').type("019VC");
        cy.get('[data-cy="transaction_select"]').select("Order", { force: true });
        cy.get('[data-cy="transaction_status"]').select("Pending/Draft", { force: true });
        cy.get('[data-cy="data_import_select"]').select("Course", { force: true });
        cy.get('[data-cy="report_dur_select"]').select("Monthly", { force: true });
        cy.get('[data-cy="pivot_select"]').select("Quantity", { force: true });
        cy.get('[data-cy="processor_select"]').select("Wells Fargo", { force: true });
        cy.get('[data-cy="processor_transaction_select"]').type("e-2019095091052");
        cy.get('[data-cy="po_number_txt"]').type("e-2019095091052");
        cy.get('[data-cy="user_guid_text"]').type("05tzZ");
        cy.get('[data-cy="remove_ucertify_check"]').uncheck();
        cy.get('[data-cy="advance_sbt_btn"]').click();
    });

    it("To search in advance mode for Weekly Website Sale", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="report_select"]').select("Weekly Website Sale", { force: true });
        cy.get('[data-cy="load_button"]').click();
        cy.get('[data-cy="guid_textarea"]').type("019VC");
        cy.get('[data-cy="transaction_select"]').select("Order", { force: true });
        cy.get('[data-cy="transaction_status"]').select("Pending/Draft", { force: true });
        cy.get('[data-cy="data_import_select"]').select("Course", { force: true });
        cy.get('[data-cy="report_dur_select"]').select("Monthly", { force: true });
        cy.get('[data-cy="pivot_select"]').select("Quantity", { force: true });
        cy.get('[data-cy="processor_select"]').select("Wells Fargo", { force: true });
        cy.get('[data-cy="processor_transaction_select"]').type("e-2019095091052");
        cy.get('[data-cy="po_number_txt"]').type("e-2019095091052");
        cy.get('[data-cy="user_guid_text"]').type("05tzZ");
        cy.get('[data-cy="remove_ucertify_check"]').uncheck();
        cy.get('[data-cy="advance_sbt_btn"]').click();
    });

    it.only("Advance Search reset button", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="report_select"]').select("Daily Order Book", { force: true });
        cy.get('[data-cy="load_button"]').click();
        cy.get('[data-cy="guid_textarea"]').type("g9827");
        cy.get('[data-cy="advance_rst_btn"]').click();
    });

    it("To close the modal click on cancel button", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="advance_search"]').click();
        cy.get('[data-cy="limit_select"]').select("10", { force: true });
        cy.get('[data-cy="advance_cancel_btn"]').click();
    });
});