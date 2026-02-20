/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14977
@story_name: educator_accomodation_new_report
@path: final/Educator
@test_case_name: educator_accomodation_new_report.js
@description: educator_accomodation_new_report
@test_steps:
^open a modal box and track the report
-goto the link: https://demo.ucertify.com:9040/
-click on admin
-click on manage dropdown
-click on sections
-click on advance search
-click on status and select option All
-select a row and click on actions
-click on track report

@test_data: n/a

@result: open a modal box and track the report
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

    })
    it("open a modal box and track the report", function() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy=admin_tab]').click({ force: true })
        cy.get('[data-cy=manage_link]').click({ force: true })
        cy.get('[data-cy=section_link]').click()
        cy.get("#status").select('All', { force: true });
        cy.get('[data-cy=custom_btn]').click()
        cy.get(':nth-child(5) > .span1 > .d-flex > .custom_checkbox_new > .check_mark_custom').click();
        cy.get('[data-cy=action_sec_track]').eq(5).click();
        cy.get(':nth-child(4) > :nth-child(9) > .dropdown > .dropdown-menu > :nth-child(1) > [data-cy=roster_action_opt]').click({ force: true });
    });
    it("open a modal box and track the report2", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/admin.php?func=roster&courses_list=03oid&section_list=05kMJ&org_id=&all_orgs=1')
        })
        cy.get('#export_track_form > .btn-outline-primary').click({ force: true })
        cy.get('#download_gradebook').click({ force: true })
        cy.get('.dropdown > #modal-download-gradebook > .modal-dialog > .modal-content > #download_optionbox > .modal-body > .col-md-12 > #download_option_block > .mb-0 > .m-l-n-md > .custom_checkbox_new > .check_mark_custom').click({ force: true })
        cy.get('.dropdown > #modal-download-gradebook > .modal-dialog > .modal-content > #download_optionbox > .modal-footer > #download').click({ force: true })
    });
});