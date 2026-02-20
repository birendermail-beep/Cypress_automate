/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 
@story_name: orderbook_start
@path: final/7761/orderbook
@test_case_name: orderbook_start.js
@description: 
@test_steps:
^course_list_modal1
-Go to the https://www.ucertify.com/admin/admin_voucher.php
-Click on generate button
-Edit voucher page will open
-Click on Add course button
-Course list modal will be open
-Select bundle from option to show bundle courses
-Click on show button to load bundle list(70-461)
-In search box enter correct crn to search course in bundle list based on crn
-Click on course and then click save button

^course_list_modal2
-Go to the https://www.ucertify.com/admin/admin_voucher.php
-Click on generate button
-Edit voucher page will open
-Click on Add course button
-Course list modal will be open
-Select bundle from option to show bundle courses
-Click on show button to load bundle list
-In search box enter incorrect crn to search course in bundle list based on crn

^filter_course_based_on_checkbox
-Go to the https://www.ucertify.com/admin/admin_voucher.php
-Click on generate button
-Edit voucher page will open
-Click on Add course button
-Course list modal will be open
-Select bundle from option to show bundle courses
-Click on show button to load bundle list
-Click on Selected checkbox to display only selected data

^filter_course_based_on_checkbox2
-Go to the https://www.ucertify.com/admin/admin_voucher.php
-Click on generate button
-Edit voucher page will open
-Click on Add course button
-Course list modal will be open
-Select bundle from option to show bundle courses
-Click on show button to load bundle list
-Enter data on which basis you want to search
-Click on exact match check box to display data which is mathed with data in search box

@test_data: 
-1- crn: 70-461
-1- crn: 70-462
-1- Search keyword: linux

@result: Course list of that crn should be appear. 
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url +"/admin");
            cy.get('[data-cy=admin_option] > :nth-child(4) > :nth-child(2) > .nh > .chapter-link').click({force:true})
            cy.get(".btn.btn-light.mr-1").contains("Generate");
            cy.visit(data.url +"/admin/admin_voucher.php?action=voucher_gen");
        })
    });
    //course_list_modal1
    it("Choose course from modal list and add", function() {
        cy.get("#free_copy").click({ force: true });
        cy.get("#eval_copy").click({ force: true });
        cy.get("#btn-update").click({ force: true });
        cy.get("#add_course").click({ force: true })
        cy.wait(5000)
        cy.get("#selectOthers").select("bundle", {force: true});
        cy.get(".btn")
            .contains("Show")
            .click();
        cy.get("#search").type("70-461");
        cy.get("#search_course").click();
        cy.get("#select_course").click({ force: true });
    });
    //course_list_modal2
    it("Choose course from modal list and add with wrong crn", function() {
        cy.get("#free_copy").click({ force: true });
        cy.get("#eval_copy").click({ force: true });
        cy.get("#btn-update").click({ force: true });
        cy.get("#add_course").click({ force: true });
        cy.wait(5000)
        cy.get("#selectOthers").select("bundle", { force: true });
        cy.get(".btn")
            .contains("Show")
            .click();
        cy.get("#search").type("70-462");
        cy.get("#search_course").click();
        cy.get("#select_course").click({ force: true });
    });
    //filter_course_based_on_checkbox
    it("after showing the course click on checkboxes to filter data", function() {
        cy.get("#free_copy").click({ force: true });
        cy.get("#eval_copy").click({ force: true });
        cy.get("#btn-update").click({ force: true });
        cy.get("#add_course").click({ force: true });
        cy.wait(5000)
        cy.get("#selectOthers").select("bundle", { force: true });
        cy.get(".btn")
            .contains("Show")
            .click();
        cy.get("#selected_courses").check();
    });
    //filter_course_based_on_checkbox2
    it("after showing the course click on checkboxes to filter exact data", function() {
        cy.get("#free_copy").click({ force: true });
        cy.get("#eval_copy").click({ force: true });
        cy.get("#btn-update").click({ force: true });
        cy.get("#add_course").click({ force: true });
        cy.wait(5000)
        cy.get("#selectOthers").select("bundle", { force: true });
        cy.get(".btn")
            .contains("Show")
            .click();
        cy.get("#search").type("linux");
        cy.get("#exact_match").check();
    });
});
