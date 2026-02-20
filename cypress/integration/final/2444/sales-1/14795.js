/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14975
@story_name: admin_assessment_performance_report
@path: final/Admin
@test_case_name: admin_assessment_performance_report.js
@description:
@test_steps:
^show the performance report
-visit the website
-Click on reports.
-Click on new assessment area.
-Click on performance report.
-Enter start date and end date from option.
-Click on search

@test_data:n/a
@result: open item performance reports
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("assessment report in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
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