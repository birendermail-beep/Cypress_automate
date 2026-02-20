/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 15001
@story_name: educator_download_export_gradebook
@path: final/Educator
@test_case_name: educator_download_export_gradebook.js
@description:
@test_steps:
^download the excel file report of gradbook.
-goto the link: https://demo.ucertify.com:9040/
-click on my library.
-Select a course and click on manage
-select instructor tool for the selected course
-click on track.
-click on gradebook.
-click on export on right side.
-click on gradebook.
-select excel option.
-click to download.

@test_data: n/a
@result: download the excel file report of gradbook.
*/


import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("download the excel file report of gradbook.", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        InstructorPage.visitCourseSupport()
        cy.get('[data-cy=track]').click({ force: true })
        cy.get('[data-cy=gradebook_track_cy]').click();
        cy.get('[data-cy=gradebook__dropdown_cy]').click()
        cy.get('[data-cy=export_track_cy]').click({ force: true })
        cy.get('[data-cy=export_gradebook_cy]').click({ force: true });
        cy.get('[data-cy=download_excel]').click({ force: true });
        cy.get('[data-cy=download_report]').click({ force: true });
    });
});