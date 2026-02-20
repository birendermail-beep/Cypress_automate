/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15054
@story_name: educator_manage_export
@path: final/Educator
@test_case_name: educator_manage_export.js
@description:
@test_steps:
^select the check boxes and click on export to export the data
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-click on admin
-click on reports
-select enrollments
-click on on dropdown and select the ucertify
-in search box give the email and click on search icon

^export the data 
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-click on admin
-click on on dropdown and select the ucertify
-in search box give the email and click on search icon
-check the selected item
-click on export
-click on activity 
-click on generate

@test_data: n/a
@result: click on export and there is dropdown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.fixture('global').then(data => {
                cy.get('[data-cy=mylibrary]').click({ force: true })
                cy.get('[data-cy=admin_tab]').click({ force: true })
                cy.get('#org_id').select('01LjT', { force: true })
                cy.get('[data-cy=roster_link]').click({ force: true })
                cy.wait(10000)
            })
        })
    })
    it("educator manage export", function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=enroll_link_tabs]').click({ force: true })
            cy.get('#enrollment_report_search').type(data.author_email[0], { force: true })
            cy.get('.btn-primary').contains('Search').click({ force: true })
        })
    });
    it("educator manage export", function() {
        cy.fixture('global').then(data => {
            cy.wait(10000)
            cy.get('[data-cy=roster_link]').click()
            cy.get('#roster_email').type(data.author_email[0], { force: true })
            cy.get('[data-cy=custom_btn]').click({ force: true })
        })
        cy.get('#org_id').select('All Org', { force: true })
        cy.get('#mytable > thead > tr > .span1 > .custom_checkbox_new > .check_mark_custom').click({ force: true });
        cy.get('#export_track_form > .dropdown-toggle').click({ force: true });
        cy.get('#export_track_form > .dropdown-menu > :nth-child(1) > .export_track_check').click({ force: true });
        cy.get('.export_track').should('exist')
    });
});