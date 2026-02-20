/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14796
@story_name: admin_assessment_search_theme
@path: final/Admin
@test_case_name: admin_assessment_search_theme.js
@description: assessment report in admin area
@test_steps:
^show the standard report
-goto to the link https://demo.ucertify.com:9040/admin/
-click on reports
-click on new assessment area
-click on standard report
-enter the email id and click on search icon

^show the item evaluated report 1
-goto to the link https://demo.ucertify.com:9040/admin/
-click on reports
-click on new assessment area
-click on item evaluated
-enter the email id and click on search icon

^show the item evaluated report 2
-goto to the link https://demo.ucertify.com:9040/admin/
-click on reports
-click on new assessment area
-click on item evaluated
-enter the email id and click on search icon

@test_data:
-email: pradeep.yadav@ucertify.com

@result: show the standard reports, evaluated report, performance report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
    })
    it("show the standard report", function() {
        cy.get('#reports_tab').click();
        cy.get(".chapter-link").contains("New Assessment Report").click();
        cy.fixture('global').then(data => {
            cy.get('#std_email').type(data.author_email[0]);
        })
        cy.get('#search_assessmnt').click();
    });
    it("show the item evaluated report 1", function() {
        cy.get('#reports_tab').click();
        cy.get(".chapter-link").contains("New Assessment Report").click();
        cy.get('#item_eval_btn').click();
        cy.fixture('global').then(data => {
            cy.get('#std_email').type(data.auditor_email[6]);
        })
        cy.get('#search_assessmnt').click();;
    });
    it("show the item evaluated report 2", function() {
        cy.get('#reports_tab').click();
        cy.get(".chapter-link").contains("New Assessment Report").click();
        cy.get('#performance_report_btn').click();
        cy.get('#start_date').click();
        cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(1)').click();
        cy.get('#end_date').click();
        cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
        cy.get("#assignment_code").select('All', { force: true });
        cy.get('#performance_search_btn').click();
    });
});