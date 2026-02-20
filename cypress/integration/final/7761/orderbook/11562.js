/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11562
@story_name: Admin_orderbook_payment
@path: final/7761/orderbook
@test_case_name: Admin_orderbook_payment.js
@description: N/A
@test_steps:
^Report button today used option
-Click on report button
-Select today used option

^Report button today issued option
-Click on report button
-Select today used option

^Report button unused option
-Click on report button
-Select unused option

^To assign voucher use assign option
-Click on report button
-Select unused option
-From action column select assign option
-Enter Email

^Set section of course
-Click on report button
-Select issued option
-From action column select set section option
-Click on checkboxes
-Select i have section key
-Enter section key
-Click on submit button

^Set section of course to user
-Click on report button
-Select today issued option
-From action column select set section option
-Click on checkboxes
-Select search option
-Enter instructor email
-Select section of course

^details of order
-Click on report button
-Select today issued option
-From action column select order details option

^It shows history of voucher
-Click on report button
-Select today issued option
-From action column select history option

^To edit in voucher use edit option
-Click on report button
-Select today issued option
-From action column select edit option

^To edit in voucher use edit option
-Select course
-select Licence Permission
-Select Licences
-Select Org Id
-Select Site ID
-Assign Mentor
-Transaction Guid
-Select Status
-Enter User Email
-Select Duration
-Select Expiry Date
-Enter Test Session ID
-Enter Max Seat
-Click on save button

^If you want to disable content click on disable option
-Click on report button
-Select today issue
-Enter rahul.shukla@ucertify.com in search box
-Click on search button
-CRN (74-409-live-lab) click on action menu and select disable
-A pop up of confirmation message will appear 
-Click on ok

^If you want to delete voucher click on delete option
-Click on report button
-Select today issue
-Enter rahul.shukla@ucertify.com in search box
-Click on search button
-CRN (74-409-live-lab) click on action menu and select delete
-A pop up of confirmation message will appear
-Click on yes

^Generate new voucher / enrollment
-Enter rahul.shukla@ucertify.com in search box
-Click on search button
-Click on generate button to generate new voucher/enrollment

^Fill details to Generate new voucher / enrollment
-Select bill type
-Select Processor
-Enter PO/Check(Click on TM)
-Select Order by Org
-Select Used by Org
-Select Site Id
-Enter email in Order By Email
-Enter comment in comment
-Click on Generate voucher
-Clcik on Add course
-Enter testing in search box
-Click on search button
-Clcik on vmware testing
-Clcik on save
-Select Licence Type
-Give permission and select type
- Select duration
- Enter quantity
-Click on delete button if you want to delete course
-Click on send mail check box to me
-Click on proceed next

^Fill details to Generate new voucher / enrollment2
-Select bill type
-Select Processor
-Enter PO/Check(Click on TM)
-Select Order by Org
-Select Used by Org
-Select Site Id
-Enter email in Order By Email
-Enter comment in comment
-Click on enroll directly
-Clcik on Add course
-Enter testing in search box
-Click on search button
-Clcik on vmware testing
-Clcik on save
-Select Licence Type
-Give permission and select type
- Select duration
- Enter quantity
-Click on delete button if you want to delete course
-Click on send mail check box to me
-Click on email
-Enter email
-Click on proceed next

^use reset button to clear the input fields
-Fill all fields
-Click on reset button

@test_data:
-Course: 74-409-live-lab
-Licence Permission: custom
-Licences: lab
-Org Id: uCertify
-Site ID: uCertify
-Assign Mentor: rahul.shukla@ucertify.com
-Transaction Guid: 00x8D
-Status: used
-email: rahul.shukla@ucertify.com
-Duration:4 months
-Expiry Date: 31 july
-Test Session ID: 0
-Max Seat: 99"
-Enter rahul.shukla@ucertify.com in search box
-Email: rahul.shukla@ucertify.com

@result: Order voucher area will  be open
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index'
describe("orderbook page testing", function () {
    beforeEach("This will run before each", function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin");
            cy.wait(2000);
            cy.get('[data-cy=admin_option] > :nth-child(4) > :nth-child(2) > .nh > .chapter-link').click();
            cy.wait(2000);
        })
    });
    //report_button_advance_serach.1
    it("Search voucher based on many fileds", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".modal_advance_search").click();
        cy.get(".col-lg-4.mb-md > #voucher_code").type("RXTJ-XKUJ-LB7B-3UAS", {
            force: true
        });
        cy.get("#advance_search").click({ force: true });
    });
    //report_button_today_used.1
    it("display voucher used today", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Today Used")
            .click({ force: true });
    });
    //report_button_today_issued.1
    it("display voucher issued today", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Today Issued")
            .click({ force: true });
    });
    //report_button_unused.1
    it("display unused voucher", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Unused")
            .click({ force: true });
    });
    //report_button_unused_action_column.1
    it("After filling email the course will be assign to entered email", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Unused")
            .click({ force: true });
        cy.get(".assign_voucher")
            .contains("Assign")
            .click({ force: true });
        cy.get('#voucher_email').type(login_username, { force: true });
        cy.get("#user_name").click({ force: true });
        cy.get("#submit_voucher_button").click({ force: true });
    });
    //report_button_issued_action_column.1
    it("Set section of course", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click();
        cy.get(".dropdown-item")
            .contains("Today Issued")
            .click();
        cy.get('.btn > .icomoon-new-24px-gear-1').eq(1).click()
        cy.get(".dropdown-menu > :nth-child(2) > .dropdown-item")
            .contains("Set Section")
            .click({force: true});
        cy.get(':nth-child(3) > .custom_checkbox_new > .check_mark_custom').click()
        cy.get('#ask_section_044Qz').select('I have section key', {force: true});
        //cy.get('.select2-search__field').type('I have section key{enter}')
        cy.fixture('global').then(data => {
            cy.get('#section_key_044Qz').type(data.section_key[0] + '{enter}');
        })
        cy.get('#tagging_voucher_button').click({ force: true })
    });
    //report_button_issued_action_column.2
    it("Set section of course to user", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click();
        cy.get(".dropdown-item")
            .contains("Today Issued")
            .click();
        cy.get('.btn > .icomoon-new-24px-gear-1').eq(1).click()
        cy.get(".dropdown-menu > :nth-child(2) > .dropdown-item")
            .contains("Set Section")
            .click({force: true});
        cy.get(':nth-child(3) > .custom_checkbox_new > .check_mark_custom').click()
        // cy.get('.ask_section_02C7j > .w-100 > .select2-container > .selection > .select2-selection').click();
        // cy.get('.select2-search__field').type('Search{enter}')
        cy.fixture('global').then(data => {
            cy.get('#ask_section_044Qz').select('Search', {force: true});
            cy.get('#email_mentor_044Qz').type(data.auditor_email[4] + '{enter}', { force: true }).blur()
        })
        cy.get('.section_list_044Qz > .w-100 > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type('Instructor Testing [K-AS37BG4TPGPD]{enter}');
        cy.get('.text-danger').should('exist');
    });
    //report_button_issued_action_column.3
    it("details of order", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Today Used")
            .click({ force: true });
        cy.get(".ajax_req")
            .contains("Order details")
            .click({ force: true });
    });
    //report_button_issued_action_column.4
    it("It shows history of voucher", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Today Used")
            .click({ force: true });
        cy.get(".enrollment_history")
            .contains("History")
            .click({ force: true });
    });
    //report_button_issued_action_column.5
    it("To edit in voucher use edit option", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Today Used")
            .click({ force: true });
        cy.get('.btn > .icomoon-new-24px-gear-1').eq(1).click({ force: true })
        cy.get('.dropdown-item').contains('Edit').eq(0).click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_voucher.php?action=edit&voucher_code=XX3KLSCUHJYNHXLN");
        })
    });
    //To edit in voucher use edit option
    it("To edit in voucher use edit option value", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Today Used")
            .click({ force: true });
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_voucher.php?action=edit&voucher_code=XX3KLSCUHJYNHXLN");
        })
        cy.get("#course_permission0").select("Custom", { force: true });
        cy.get("#site_id").select("uCertifyTest", { force: true });
        cy.get("#mentors_email").clear({ force: true });
        cy.fixture('global').then(data => {
            cy.get("#mentors_email").type(data.auditor_email[4]);
        })
        cy.get("#status").select("Used", { force: true });
        cy.get("#user_email").clear();
        cy.get("#user_email").type(login_username, { force: true });
        cy.get("#duration").select("4 Months", { force: true });
        cy.get("#expiry_date").type("12-sep-19", { force: true });
        cy.get("#test_session_id").type("0", { force: true });
        cy.get("#seat_max").clear();
        cy.get("#seat_max").type("99", { force: true });
        cy.get('.offset-md-4 > .btn-primary').click({ force: true });
    });
    //to multi seat details click on multi seat
    it("To edit in voucher use edit option value", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Today Used")
            .click({ force: true });
        cy.fixture('global').then(data => {
            cy.get('#search_text').type(data.auditor_email[4], { force: true });
            cy.get('#submit').click({ force: true })
            cy.get('[course_name="ICT Word Processing Essentials Bundle"]').contains('Multi Seat Details').click({ force: true })
            cy.get('#voucher_email').type(data.auditor_email[4], { force: true });
            cy.get('#user_name').type('rahul shukla', { force: true })
            cy.get('#submit_voucher_button').click({ force: true })
        })
    });
    //report_button_issued_action_disable
    it("If you want to disable content click on disable option", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Today Used")
            .click({ force: true });
        cy.fixture('global').then(data => {
            cy.get('#search_text').type(data.auditor_email[4], { force: true });
            cy.get('#submit').click({ force: true })
        })
        cy.get(':nth-child(10) > .dropdown > .btn').eq(0).click();
        cy.get('.set_voucher_status').eq(4).click({ force: true }) // for disable
        cy.get('[data-cy=yesbutton]').click({ force: true })
        cy.get('.set_voucher_status').eq(4).click({ force: true }) // for enable
        cy.get('[data-cy=yesbutton]').click({ force: true })
    });
    //report_button_issued_action_delete.1
    it("If you want to delete voucher click on delete option", function () {
        cy.get(".btn.btn-light.dropdown-toggle")
            .contains("Report")
            .click({ force: true });
        cy.get(".dropdown-item")
            .contains("Today Issued")
            .click({ force: true });
        cy.fixture('global').then(data => {
            cy.get("#search_text").type(data.auditor_email[4], { force: true });
        })
        cy.get("#submit").click();
        cy.get(".delete_voucher.dropdown-item")
            .contains("Delete")
            .click({ force: true });
    });
    //generate_btn
    it("Generate new voucher / enrollment", function () {
        cy.fixture('global').then(data => {
            cy.get("#search_text").type(data.auditor_email[4], { force: true });
        })
        cy.get("#submit").click({ force: true });
        cy.get('.form-group > a.btn-light').contains("Generate").click({ force: true });
    });
    //generate_btn.1
    it("Generate new voucher / enrollment", function () {
        cy.fixture('global').then(data => {
            cy.get("#search_text").type(data.auditor_email[4], { force: true });
            cy.get("#submit").click({ force: true });
            cy.get(".btn.btn-light.mr-1").contains("Generate");
            cy.visit(data.url + "/admin/admin_voucher.php?action=voucher_gen");
            cy.get("#btn-update").click({ force: true });
        })
    });
    //generate_btn.2
    it("Fill details to Generate new voucher / enrollment", function () {
        cy.get(".btn.btn-light.mr-1").contains("Generate");
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_voucher.php?action=voucher_gen");
        })
        cy.get("#free_copy").click({ force: true });
        cy.get("#eval_copy").click({ force: true });
        cy.get("#btn-update").click({ force: true });
        cy.get("#is_paid").select("Eval copy no warning in LTI", { force: true });
        cy.get("#po_check_number").type("e-20190910091129", { force: true });
        cy.get('#order_by_org').select('uCertifyTest', { force: true })
        cy.get('#org_id').select('uCertifyTest', { force: true })
        cy.get('#site_id').select('uCertifyTest', { force: true })
        cy.get("#t_stamp").click({ force: true });
        cy.get("#comments").type("testing", { force: true });
        cy.get("#add_course").click({ force: true });
        cy.wait(5000)
        cy.get('#selectOthers').select('Bundle', { force: true })
        cy.get('.mb-2 > .col-2 > .btn-primary').click({ force: true })
        cy.get('.col-md-9 > .col-lg-3 > .col-2 > .checkbox').eq(0).check({ force: true })
        cy.get("#select_course").click({ force: true });
        cy.get("#course_permission1").select("None", { force: true });
        cy.get("#duration1").select("1 Year", { force: true });
        cy.get("#quantity1").clear().type("2", { force: true });
        cy.get("#generate_voucher_validate_btn").click({ force: true });
        cy.get("#confirmation_modal_btn").click({ force: true });
    });
    //generate_btn.3
    it("Fill details to Generate new voucher / enrollment2", function () {
        cy.get(".btn.btn-light.mr-1").contains("Generate");
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_voucher.php?action=voucher_gen");
        })
        cy.get("#free_copy").click({ force: true });
        cy.get("#eval_copy").click({ force: true });
        cy.get("#btn-update").click({ force: true });
        cy.get("#is_paid").select("Eval copy no warning in LTI", { force: true });
        cy.get("#po_check_number").type("e-20190910091129", { force: true });
        cy.get('#order_by_org').select('uCertifyTest', { force: true })
        cy.get('#org_id').select('uCertifyTest', { force: true })
        cy.get('#site_id').select('uCertifyTest', { force: true })
        cy.get("#t_stamp").click({ force: true });
        cy.get("#comments").type("testing", { force: true });
        cy.get('#enroll_directly').click({ force: true })
        cy.get("#add_course").click({ force: true });
        cy.wait(5000)
        cy.get('#selectOthers').select('Bundle', { force: true })
        cy.get('.mb-2 > .col-2 > .btn-primary').click({ force: true })
        cy.get('.col-md-9 > .col-lg-3 > .col-2 > .checkbox').eq(0).check({ force: true })
        cy.get("#select_course").click({ force: true });
        cy.get("#course_permission1").select("None", { force: true });
        cy.get("#duration1").select("1 Year", { force: true });
        cy.get("#quantity1").clear({ force: true }).type("2", { force: true });
        cy.get("#generate_voucher_validate_btn").click({ force: true });
        cy.get("#confirmation_modal_btn").click({ force: true });
    });
    //generate_btn.4
    it("use reset button to clear the input fields", function () {
        cy.get(".btn.btn-light.mr-1").contains("Generate");
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_voucher.php?action=voucher_gen");
        })
        cy.get("#free_copy").click({ force: true });
        cy.get("#eval_copy").click({ force: true });
        cy.get("#btn-update").click({ force: true });
        cy.get("#is_paid").select("Eval copy no warning in LTI", { force: true });
        cy.get("#po_check_number").type("e-20190910091129", { force: true });
        cy.get("#t_stamp").click({ force: true });
        cy.get("#comments").type("testing", { force: true });
        cy.get("#add_course").click({ force: true });
        cy.wait(5000)
        cy.get('#selectOthers').select('Bundle', { force: true })
        cy.get('.mb-2 > .col-2 > .btn-primary').click({ force: true })
        cy.get('.col-md-9 > .col-lg-3 > .col-2 > .checkbox').eq(0).check({ force: true })
        cy.get("#select_course").click({ force: true });
        cy.get("#course_permission1").select("None", { force: true });
        cy.get("#duration1").select("1 Year", { force: true });
        cy.get("#quantity1").clear();
        cy.get("#quantity1").type("2", { force: true });
        cy.get("#reset").click({ force: true });
        cy.get("#btn-confirmed").click({ force: true });
    });
    //course_list_modal
    it("Choose course from modal list and add", function () {
        cy.get(".btn.btn-light.mr-1").contains("Generate");
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_voucher.php?action=voucher_gen");
        })
        cy.get("#free_copy").click({ force: true });
        cy.get("#eval_copy").click({ force: true });
        cy.get("#btn-update").click({ force: true });
        cy.get("#add_course").click({ force: true });
        cy.wait(5000)
        cy.get('#selectOthers').select('Bundle', { force: true })
        cy.get('.mb-2 > .col-2 > .btn-primary').click({ force: true })
        cy.get('#search').clear({ force: true }).type('ICT-Course-Test', { force: true })
        cy.get('#search_course').click({ force: true });
        cy.get('#search').clear({ force: true }).type('70-462', { force: true })
        cy.get('#search_course').click({ force: true });
    });
});