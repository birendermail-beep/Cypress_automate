/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14793
@story_name: admin_ascend_survey_report
@path: final/Admin
@test_case_name: admin_ascend_survey_report.js
@description:
@test_steps: 
^survey report
-goto the link

@test_data: n/a
@result: show the survey report
*/
import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe("admin page testing", function () {
    it("survey report in admin area", function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url);
            Navbar.clickOnLogin();
            LoginPage.loginPage(login_username, login_password);
            cy.visit(data.url + "/admin/ascend_survey.php");
        })
        cy.get('#start_date').click();
        cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(1)').click({ force: true });
        cy.get('#end_date').click({ force: true });
        cy.get('.table-condensed > tbody > :nth-child(2) > :nth-child(1)').click({ force: true });
        cy.get(".btn.btn-light").contains("Search").click({ force: true });
    });
});