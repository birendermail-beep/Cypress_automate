/*
@author: Anurag Chaurasia
@master_project_id: 2444
@phase_id: 10148
@story_id: 14828
@story_name: assessment_report_gear_button
@path: final/Admin
@test_case_name: assessment_report_gear_button.js
@description:
@test_steps:
^standard report
-goto to the link https://demo.ucertify.com:9040/admin/
-click on reports
-click on new assessment area
-click on standard report
-enter the email id and click on search icon
-click on settings icon

^item evaluated report
-goto to the link https://demo.ucertify.com:9040/admin/
- click on reports
-click on new assessment area
-click on item evaluated
-enter the email id and click on search icon
-click on settings icon

^test case of resubmit result option
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/admin
- Go to reports tab
- Go to New assessment report
- Go to standard report
- Enter the email in search box
- select a course
- click on search option
- you will see test session details in table form
- now click on any action dropdown corresponding to a test session
- There will be resubmit result option in the dropdown

@test_data: n/a

@result: show the option in report 
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
        cy.get('[data-cy="reports_tab"]').click();
        cy.get(".chapter-link").contains("New Assessment Report").click();
    })
    it("standard report", function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="my_user_email"]').type(data.author_email[0]);
        })
        cy.get('[data-cy="search_assessmnt"]').click();
        //cy.get('.float-right > :nth-child(2) > .btn').click({ force: true });
    });
    it("item evaluated report", function() {
        cy.get('#item_eval_btn').click();
        cy.fixture('global').then(data => {
            cy.get('[data-cy="my_user_email"]').type(data.auditor_email[6]);
        })
        cy.get('[data-cy="search_assessmnt"]').click();
        //cy.get('.float-right > :nth-child(2) > .btn').click({ force: true });
    });
    it("Show resubmit result option", function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="my_user_email"]').type(data.author_email[0]);
        });
        cy.get('[data-cy="enter_course"]').select('Python (Python)',{force:true});
        cy.get('[data-cy="search_assessmnt"]').click();
        cy.get('[data-cy="multiple_resubmit_result"]').click({force:true});  
    })
});