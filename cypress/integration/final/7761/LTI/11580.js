/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id : 6618
@story_id: 11580
@story_name: LTI Area 
@path: final/7761/LTI
@test_case_name: LTI Area.js
@description : N/A
@test_steps:
^Use valid LTI  Key and LTI Secret
-Enter Valid LTI Key 
-Enter Valid LTI Secret
-Click on Recomplie and Launch

^Use invalid LTI  Key but valid LTI Secret
-Do not provide LTI Key or provide wrong LTI Key
-Provide LTI Secret
-Click on Recomplie and Launch

^Use valid LTI  Key but invalid LTI Secret
-Provide LTI Key 
-Do not Provide LTI Secret or provide wrong LTI Secret
-Click on Recomplie and Launch

^Use Invaid LTI Key but invalid LTI Secret
-Do not provide LTI Key or provide wrong LTI Key
-Do not Provide LTI Secret or provide wrong LTI Secret
-Click on Recomplie and Launch

^WGU Engagement
-Select wgu org
-Put endpoint, name, email
-Select role as Instrctor

^WGU Assessment Report
-Select wgu org
-Put endpoint, name, email
-Select role as Instrctor

^Last Login data will show
-Put key and secret
-Put endpoint, name, email
-Select role as Instrctor

^Download gradebook and data will show
-Put key and secret
-Put endpoint, name, email
-Select role as Instrctor

^Download gradebook and Customized data will show
-Put key and secret
-Put endpoint, name, email
-Select role as Instrctor

^No Exam Schedule ID & No Assignment Code 1
-Put key and secret
-Put endpoint, name, email
-Select role as Student

^With Exam Schedule ID but No Assignment Code 2
-Put key and secret
-Put endpoint, name, email
-Select role as Student

^No Exam Schedule ID but with Assignment Code 3
-Put key and secret
-Put endpoint, name, email
-Select role as Student

^With both Exam Schedule ID & Assignment Code 4
-Put key and secret
-Put endpoint, name, email
-Select role as Student

^Same Assignmnet Before Ending Test 1
-Put key and secret
-Put endpoint, name, email
-Select role as Student

^Same Assignmnet After Ending Test 2
-Put key and secret
-Put endpoint, name, email
-Select role as Student

^No CRN, User will redirect to My Library and no crn
-Put key and secret 
-Put endpoint, name, email 
-Select role as Student

^Wrong CRN,  User will redirect to My Library and wrong crn
-Put key and secret 
-Put endpoint, name, email 
-Select role as Student

^Enroll Student: Trial Access is ON (2 Wee-and Auto Enroll is OFF
-Put key and secret 
-Put endpoint, name, email 
-Select role as Student

^Enroll Student: Auto Enroll is ON and Trial Access is OFF
-Put key and secret 
-Put endpoint, name, email 
-Select role as Student

^Enroll Instructor
-Put key and secret 
-Put endpoint, name, email 
-Select role as Instrctor

^Auto Enroll Class is OFF
-Put key and secret 
-Put endpoint, name, email 
-Select role as Student

^Auto Enroll Class is ON
-Put key and secret 
-Put endpoint, name, email 
-Select role as Student

^Register new user
-Put key and secret 
-Put endpoint, name, email 
-Select role as Student

^Login into D2L
-Use LMS student account for checking this step 
-https://csinowtest.desire2learn.com/d2l/login
-Usere name -Shashank.Gupta
-Password - ucertify
-Select the D2L course "uCertify test" or use this URL 

^Attempt test via D2L
-

^Load billing mgmnt module
-Load below URL
-http://ucertify.com/admin/dashboard_new.php

^Search data by pay reference
-Put below pay reference in pay reference text box
-Pay Ref.:JTLHZ9BTULCWXFMX
-Click on search icon button

^Apply advance search filter
-Click on Search button and Adavnce Search option will be shown 
-Click on Advance Search 
-Advance search modal box will be open
-Fill desigred fields and click on Search button

^Analyze for billing 
-Click on setting button in table row
-You will see a option namely Analyze for Billing
-Click on that option

^Mark Billing Required
-Click on setting button in table row
-You will see a option namely Mark Billing Required
-Click on that option if this is enable

^Update Invoice Guid
-Click on setting button in table row 
-You will see a option namely Update Invoice Guid 
-Click on that option

^Do not fill invoice guid
-Click on update button

^Put wrong data
-Put any string less or grater than 5 charater with/without special character
-Click on Update button

^Put correct data
-If you have invoice guid, put it in invoice guid text box otherwise click on Serach button to seach invoice guid
-Click on Update button

^Do not bill
-Click on setting button in table row 
-You will see a option namely Do Not Bill 
-Click on that option
-Confirmation box will open
-Click on OK button

^Actions check disabled
-Do not check any check box

^Actions check enable 
-Check any checkbox

^Billing Management
-Follow above steps for Analyze for Bill, Marked billing Required and Do Not Bill Actions button option

^Action -> Update Invoice Guid
-Click on Update Invoice Guid button
-Select Invoice Type
-Click the Create Invoice button

^Report will download in XLS and CSV format
-Click on Export button
-You will see two options 
-Click on both options one by one 

@test_data: n/a 

@result: LTI Area will be opened.
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("LTI Area", function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/temp/lms_new.php");
        })
    });
    it("Use valid LTI  Key and LTI Secret", function() {
        cy.get('#key').type("DEMOTESTING");
        cy.get('#secret').type("LUVDX64L6USTS2VN");
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Use invalid LTI  Key but valid LTI Secret", function() {
        cy.get('#key').type("XXXX")
        cy.get('#secret').type("LUVDX64L6USTS2VN");
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    })
    it("Use valid LTI  Key but invalid LTI Secret", function() {
        cy.get('#key').type("DEMOTESTING");
        cy.get('#secret').type("XXXX");
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Use Invaid LTI Key but invalid LTI Secret", function() {
        cy.get('#key').type("XXXX");
        cy.get('#secret').type("XXXX");
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("WGU Engagement", function() {
        cy.get("#org_list").select("Western Governors University [wgu.ucertify.com]", { force: true });
        cy.get('#user_name').clear({ force: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
            cy.get('#endpoint').clear({ force: true }).type(data.website[1] + '/lti.php?func=wgu_engagement&crn=WGU-basics-info-security');
        })
        cy.get('#roles').select("Instructor", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("WGU Assessment Report", function() {
        cy.get("#org_list").select("Western Governors University [wgu.ucertify.com]", { force: true });
        cy.get('#user_name').clear({ force: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
            cy.get('#endpoint').clear({ force: true }).type(data.website[1] + "/lti.php?func=assessment_report&crn=WGU-basics-info-security");
        })
        cy.get('#roles').select("Instructor", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Last Login data will show", function() {
        InstructorPage.keyValue()
        cy.get('#user_name').clear({ force: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
            cy.get('#endpoint').clear({ force: true }).type(data.url + "/lti.php?func=get_last_login&custom_lms=1&cr=101-400-complete§ion=K-GXUS-8XTL-ZGEB");
        })
        cy.get('#roles').select("Instructor", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Download gradebook and data will show", function() {
        InstructorPage.keyValue()
        cy.get('#user_name').clear({ force: true }).type("ankit yadav");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?func=download_gradebook&custom_lms=1&cr=101-400-complete&download_option=2§ion=K-GXUS-8XTL-ZGEB");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.auditor_email[0]);
        })
        cy.get('#roles').select("Instructor", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Download gradebook and Customized data will show", function() {
        InstructorPage.keyValue()
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?func=get_customize_data&custom_lms=1&cr=101-400-complete&download_option=2§ion=K-GXUS-8XTL-ZGEB&start=20190101&end=20190731");
        })
        cy.get('#lis_person_contact_email_primary').clear({ force: true }).type("ankur.gupta");
        cy.get('#roles').select("Instructor", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("No Exam Schedule ID & No Assignment Code", function() {
        cy.get('#key').type("WGU_LTI_KEY");
        cy.get('#secret').type("WGU_7DS8991P");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?func=proctor_exams&exam_password=12345");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("With Exam Schedule ID but No Assignment Code", function() {
        cy.get('#key').type("WGU_LTI_KEY");
        cy.get('#secret').type("WGU_7DS8991P");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?func=proctor_exams&exam_schedule_id=56652&exam_password=12345");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("No Exam Schedule ID but with Assignment Code", function() {
        cy.get('#key').type("WGU_LTI_KEY");
        cy.get('#secret').type("WGU_7DS8991P");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?func=proctor_exams&wgu_assessment_code=CFO1&exam_password=12345");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("With both Exam Schedule ID & Assignment Code", function() {
        cy.get('#key').type("WGU_LTI_KEY");
        cy.get('#secret').type("WGU_7DS8991P");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?func=proctor_exams&wgu_assessment_code=CFO1&exam_password=12345&exam_schedule_id=56652");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Same Assignmnet Before Ending Test", function() {
        cy.get('#key').type("WGU_LTI_KEY");
        cy.get('#secret').type("WGU_7DS8991P");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?func=proctor_exams&wgu_assessment_code=CFO1&exam_password=12345&exam_schedule_id=56652");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Same Assignmnet After Ending Test", function() {
        cy.get('#key').type("WGU_LTI_KEY");
        cy.get('#secret').type("WGU_7DS8991P");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?func=proctor_exams&wgu_assessment_code=CFO1&exam_password=12345&exam_schedule_id=56652");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("User will redirect to My Library and no crn", function() {
        cy.get('#key').type("DEMOTESTING");
        cy.get('#secret').type("LUVDX64L6USTS2VN");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("User will redirect to My Library and wrong crn", function() {
        cy.get('#key').type("DEMOTESTING");
        cy.get('#secret').type("LUVDX64L6USTS2VN");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?crn=70-6");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Enroll Student: Trial Access is ON (2 Weeks) and Auto Enroll is OFF", function() {
        cy.get('#key').type("BROWARD_9899");
        cy.get('#secret').type("VJGM46BZGZAVZ5N3");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?crn=1z0-051");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Enroll Student: Auto Enroll is ON and Trial Access is OFF", function() {
        cy.get('#key').type("IVY_TECH_2969");
        cy.get('#secret').type("LUVNPPHUARRWBNGL");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?crn=1z0-051");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Enroll Instructor", function() {
        cy.get('#key').type("IVY_TECH_2969");
        cy.get('#secret').type("LUVNPPHUARRWBNGL");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?crn=1z0-051");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Instructor", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Auto Enroll Class is OFF", function() {
        cy.get('#key').type("WGU_LTI_KEY");
        cy.get('#secret').type("WGU_7DS8991P");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?crn=1z0-051");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Auto Enroll Class is ON", function() {
        cy.get('#key').type("WGU_LTI_KEY");
        cy.get('#secret').type("WGU_7DS8991P");
        cy.get('#user_name').clear({ fource: true }).type("Shashank Gupta");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?crn=1z0-051");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.author_email[3]);
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Register new user", function() {
        cy.get('#key').type("DEMOTESTING");
        cy.get('#secret').type("LUVDX64L6USTS2VN");
        cy.get('#user_name').clear({ fource: true }).type("Ankit Yadav");
        cy.fixture('global').then(data => {
            cy.get('#endpoint').clear({ fource: true }).type(data.url + "/lti.php?crn=1z0-051");
            cy.get('#lis_person_contact_email_primary').clear({ force: true }).type(data.url + "/lti.php?crn=sy0-401-complete");
        })
        cy.get('#roles').select("Student", { force: true });
        cy.get('#recompute_btn').click();
        cy.get('#launch_btn').click();
    });
    it("Load billing mgmnt module", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_orderbook_new.php");
        })
        cy.get('[data-cy="order_btn"]').eq(0).click({ force: true })
        cy.get("[data-cy=billing_management_cy]").eq(0).contains("Billing Management", { force: true }).click();
    });
    it("Search data by pay reference", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/dashboard_new.php");
        })
        cy.get('[data-cy=search_text_cy]').type("B7XCXXUH5738F7SE")
        cy.get('[data-cy=search_pay_cy]').click({ force: true });
    });
    it("Apply advance search filter", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/dashboard_new.php");
        })
        InstructorPage.advSearch()
        cy.get('[data-cy="login_counter_cy"]').type("10", { force: true });
        cy.get('[data-cy="invoice_guid_cy"]').type("1908", { force: true });
        cy.get('[data-cy="include_transaction_guid_cy"]').click({ force: true });
        cy.get('[data-cy="transaction_guid_cy"]').type("00ofh", { force: true });
        cy.get('[data-cy="submit_form_cy"]').click({ force: true });
    });
    it("Update Invoice Guid", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/dashboard_new.php");
        })
        cy.get('[data-cy=action_menu_cy]').eq(0).click({ force: true });
        cy.get('[data-cy=invoice_guid_update_cy]').eq(0).click({ force: true })
    });
    it("Do not bill", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/dashboard_new.php");
        })
        cy.get('[data-cy=action_menu_cy]').eq(0).click({ force: true });
        cy.get('[data-cy=not_bill_cy]').eq(0).click({ force: true })
    });
    it("Actions check disabled", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/dashboard_new.php");
        })
        cy.get('[data-cy=top_action_btn_cy]').should('be.disabled')
    });
    it("Actions check enable", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/dashboard_new.php");
        })
        cy.get('[data-cy="mng_billing_checkbox_cy"]').eq(0).click({ force: true })
        cy.get('[data-cy=top_action_btn_cy]').click({ force: true })
        cy.get('[data-cy=update_invoice_guid_cy]').click({ force: true })
        cy.get('#order_type').select('Invoice', { force: true })
        cy.get('#create_order_guid').click({ force: true })
    });
    it("Report will download in XLS and CSV format", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/dashboard_new.php");
        })
        cy.get('[data-cy=download_list_dropdown_cy]').click({ force: true })
        cy.get('[data-cy=export_xls_cy]').click({ force: true })
        cy.wait(3000)
        cy.get('[data-cy=download_list_dropdown_cy]').click({ force: true })
        cy.get('[data-cy=export_as_csv_cy]').click({ force: true })
    });
})