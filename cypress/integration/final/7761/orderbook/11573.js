/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 
@story_name: orderbook_subject_change
@path: final/7761/orderbook
@test_case_name: orderbook_subject_change.js
@description: 
@test_steps:
^use to change subject data
-Select category
-Select sub category
-Select subject
-Select level

^filter data based on start date
-Enter start date

^filter data based on end date
-Enter end date

@test_data:
-Category: Information technology
-Sub category: Database
-Subject: Oracle
-Level: expert"
-Start date: 03-Jul-19
-End date: 02-Jul-19

@result: License should be added. 
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    it("use to change subject data", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url +"/admin/subject_change.php");
        })
        cy.get("[data-cy=cat_select]").eq(1).select("Information Technologies", {
            force: true
        });
        cy.get("[data-cy=sub_cat_select]").eq(1).select("Database", { force: true });
        cy.get("[data-cy=subject_select]").eq(1).select("Other", { force: true });
        cy.get("[data-cy=diff_category]").eq(1).select("Expert", { force: true });
        cy.get("#save_subject").click();
    });
});