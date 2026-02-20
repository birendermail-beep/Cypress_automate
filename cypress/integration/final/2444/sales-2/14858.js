/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14858
@story_name: ucertify-prep_diagnostic
@path: final/Admin
@test_case_name: ucertify-prep_diagnostic.js
@description: ucertify prep diagnostic
@test_steps:
^show the prep-diagnostic report
-goto to the link https://demo.ucertify.com:9040/utils/
-click on PrepEngine Diagnostic
-enter the email 
-click on submit

@test_data:
-email: surya.mani@ucertify.com

@result: show the prep-diagnostic report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("PrepEngine Diagnostic in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
        })
        cy.get(".chapter-link").contains("PrepEngine Diagnostic").click();
        cy.fixture('global').then(data => {
            cy.get('#find_user').type(data.author_email[1]);
        })
        cy.get('.col-md-12 > .alert').click();
        cy.get('#diagnosis_btn').click();
    });
});