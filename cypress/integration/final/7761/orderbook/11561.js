/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11561
@story_name: Admin_orderbook_royality
@path: final/7761/orderbook
@test_case_name: Admin_orderbook_royality.js
@decription: 
@test_steps:
^to check Status/Payment Type, Created By, comments and course
-Select royalty option from report dropdown
-In action column select quick details
-Click on + icon to expand details

^If you want edit in royalty click on edit and fill data
-Select royalty option from report dropdown
-In action column select edit

^Fill details to modify in royalty
-Select royalty option from report dropdown
-In action column select edit
-Fill details to modify
-Then click on add course
-After clicking on add course a pop up will be open to add courses
-Choose course from that list
- Select bundle from 1st dropdown
-Type testing in search box and click on search
-Select : Archana Course Testing and click on save
-After that click on submit order

^Select in which categories you want to add royalty
-Select royalty option from report dropdown 
-In action column select save as
-In pop up select order
-In order select This is free copy
-In This is free copy select License will copy
-After that click on continue
-Add orderbook page will be open

^Add details in orderbook
-Select royalty option from report dropdown 
-In action column select save as
-In pop up select order
-In order select This is free copy
-In This is free copy select License will copy
-After that click on continue
-Add orderbook page will be open
-Write Parent Transaction GUID
-Write Name
-Write Email
-Write On Date-Valid Date
-Write Street
- Write Processor Order Number
-Write City
-Write Promotion Code
-Write State
-Select Currency
-Select country
-Enter phone number
-Select USD amount(Receive/paid/no effect)
-Enter in comment
-Select delivery option
-Enter Internal Comments
-Click on Add course

^print preview of invoice
-Click on royalty option from report dropdown
-In action column select print preview

^Download report of royalty in excel
-Click on royalty option from report dropdown
-In action column select download royalty report in excel

@test_data: n/a

@result: Status/Payment Type, Created By, comments and course, Edit royalty page, Preview of Invoice will open. Royalty details should be change. After Clicking on continue add orderbook ed , Order will be Added/Updated. Excel file of invoice should be download 
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
        cy.wait(7000);
    })

    it("to check Status/Payment Type, Created By, comments and course", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(3).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(3000)
        cy.get('[data-cy="quick_link"]').eq(0).click();
        cy.get('[data-cy="payment_type"]').click();
        cy.get('[data-cy="created_by"]').click();
        cy.get('[data-cy="comments_accord"]').click();
    });

    it("If you want edit in royalty click on edit and fill data", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(3).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(3000)
        cy.get('[data-cy="edit_link"]')
            .should('have.attr', 'href').then((href) => {
                cy.visit(href)
                cy.get('[data-cy="internal_comt"]').clear().type('Testing')
            });
    });

    it("Fill details to modify in royalty", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(3).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(3000)
        cy.get('[data-cy="edit_link"]')
            .should('have.attr', 'href').then((href) => {
                cy.visit(href)
            });
        cy.get('[data-cy="internal_comt"]').clear().type('Testing')
        cy.get("#from_date").click();
        cy.get('.table-condensed > tbody > :nth-child(3) > :nth-child(4)').click();
        cy.get("#end_date").click();
        cy.get('.table-condensed > tbody > :nth-child(3) > :nth-child(5)').click();
        cy.get('[data-cy="add_course_btn"]').click();
        cy.wait(8000)
        cy.get('[data-cy="select_other"]').select("Bundle", { force: true });
        cy.get('[data-cy="search_box"]').type("testing");
        cy.get('[data-cy="search_btn"]').click();
        cy.get('[data-cy="save_admin_btn"]').click();
        cy.get('[data-cy="submit_btn"]').click({ force: true });
    });

    it("Select in which categories you want to add royalty", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(3).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(3000)
        cy.get('[data-cy="save_link"]').eq(0).click();
        cy.get('[data-cy="order_type_radio"]').click({ force: true });
        cy.get('[data-cy="free_copy_radio"]').click({ force: true });
        cy.get('[data-cy="eval_copy_radio"]').click({ force: true });
        cy.get('[data-cy="btn_upt"]').click({ force: true });
    });

    it("Add details in orderbook", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(3).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(3000)
        cy.get('[data-cy="save_link"]').eq(0).click();
        cy.get('[data-cy="order_type_radio"]').click({ force: true });
        cy.get('[data-cy="free_copy_radio"]').click({ force: true });
        cy.get('[data-cy="eval_copy_radio"]').click({ force: true });
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_orderbook_new.php?bill_type=free_copy&bill_copy_type=eval_copy&action=add&old_order=&secondary_order=&from_transaction_modal=1");
        });
    });

    it("print preview of invoice", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(3).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(3000)
        cy.get('[data-cy="print_preview_link"]').eq(0).click();
        cy.get('[data-cy="print_preview_link"]')
            .should('have.attr', 'href').then((href) => {
                cy.visit(href)
            });
    });

    it("Download report of royalty in excel", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(3).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(3000)
        cy.get('[data-cy="download_exl"]').eq(0).click({ force: true });
    });
});