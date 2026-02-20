/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14989
@story_name: educator_attendance_table
@path: final/Educator
@test_case_name: educator_attendance_table.js
@description: educator_attendance_table
@test_steps:
^gradebook area
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on gradebook
-click on export
-click on attendence
-give start date and end date 
-click on get

@test_data: n/a
@result: show the attendence table
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("attendance table in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport();
        })
        cy.get('[data-cy=track]').click({ force: true })
        cy.get('[data-cy=gradebook_track_cy]').click({ force: true }).then(() => {
            cy.get('[data-cy=gradebook__dropdown_cy]').click({ force: true })
        })
        cy.get('[data-cy=export_track_cy]').click({ force: true }).then(() => {
            cy.get('[data-cy=export_attendance_modal_cy]').click({ force: true })
            cy.get('[data-cy=att_sdt_cy]').click({ force: true })
            cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(1)').click({ force: true })
            cy.get('[data-cy="att_edt_cy"]').click({ force: true })
            cy.get('.table-condensed > tbody > :nth-child(2) > :nth-child(7)').click({ force: true })
            cy.get('[data-cy=attendance_go_cy]').click({ force: true })
            cy.get('[data-cy=download_attendance_cy]').click({ force: true })
        })
    });
});