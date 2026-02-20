/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 
@story_name: orderbook_access_report
@path: final/7761/orderbook
@test_case_name: orderbook_access_report.js
@description: 
@test_steps:
^select org to display admin access report or login details
1- open https://www.ucertify.com/admin/admin_trial_access_report.php
2-  Select sybex from org

^select org to display admin access report or login details
1- open https://www.ucertify.com/admin/admin_trial_access_report.php
2-  Select all from org

^click on action menu and select send message
1- open https://www.ucertify.com/admin/admin_trial_access_report.php
2- Select all from org
3- In action menu select send message

^advance search based on email
1- Click on advance search
2- Enter email
3- click on search

^advance search based on course name
1- Click on advance search
2- select course name
3- click on search

^advance search based on start date and end date
1- Click on advance search
2- select start and end date
3- click on search

^advance search based on last login date
1- Click on advance search
2- select login date
3- click on search

@test_data: n/a

@result: all detail of selected course should be display. 
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url +"/admin/admin_trial_access_report.php");
        })
    });
    // it("select sybex to display admin access report or login details", function() {
    //     cy.get("#org_list_select").select("Sybex", { force: true });
    // });
    it("click on action menu and select send message", function() {
        cy.get(":nth-child(1) > :nth-child(7) > .dropdown > .btn").click();
        cy.contains("Send Message").click({ force: true });
    });
    // it("advance search based on email", function() {
    //     cy.get("#visit").click({ force: true });
    //     cy.get("#search_email").type("thunt73@wgu.edu", { force: true });
    //     cy.get("#a_search").click({ force: true });
    // });
    // it("advance search based on course name", function() {
    //     cy.get("#visit").click({ force: true });
    //     cy.get("#a_search").click({ force: true });
    // });
    it("advance search based on start date and end date", function() {
        cy.get("[data-cy=start_date_cy]").type("16-sep-19", { force: true });
        cy.get("[data-cy=end_date_cy]").type("20-sep-19", { force: true });
        cy.get("#submit_btn").click({ force: true });
    });
    // it("advance search based on last login date", function() {
    //     cy.get("#visit").click({ force: true });
    //     cy.get("#e_ldt").type("16-sep-19",{ force: true });
    //     cy.get("#a_search").click({ force: true });
    // });
    it("export as csv",function(){
        cy.get('[data-cy=download_list_dropdown_cy]').click();
        cy.get('[data-cy=export_as_csv_cy]').click(); 
    })
    it("export as csv",function(){
        cy.get('[data-cy=download_list_dropdown_cy]').click();
        cy.get('[data-cy=export_xls_cy]').click(); 
    })

    
});