/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14794
@story_name: admin_assessment_item_eval
@path: final/Admin
@test_case_name: admin_assessment_item_eval.js
@description: item area
@test_steps:
^show the assessment item eval area 
-visit the website
-login
-click on reports
-click on new assessment area
-click on item evaluated
-enter email id and click on search
-click on export
-click on item evaluated
-click on generate 
@test_data:
-email: pradeep.yadav@ucertify.com
@result: show the assessment item eval area 
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
        cy.get('#item_eval_btn').click();
        cy.fixture('global').then(data => {
            cy.get('#std_email').type(data.auditor_email[6]);
        })
        cy.get('#search_assessmnt').click();
        cy.get('#download_item_report').click({ force: true });
        cy.get('.export_track').click({force: true});
        cy.wait(5000);
        cy.get('#download_file_link').click({ force: true });
    });
});