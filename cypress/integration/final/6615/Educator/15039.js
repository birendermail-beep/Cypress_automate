/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15039
@story_name: educatorCertificateDownload
@path: final/Educator
@test_case_name: educatorCertificateDownload.js
@description:
@test_steps: 
^test case Instructor area
-visit the website
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track 
-click on more
-click on certificate
-click dropdown and click on download certificate
@test_data: n/a
@result: download the certificate  
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("tabs area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy="mylibrary"]').click({ force: true })
            cy.get('[data-cy="searchbox"]').clear().type('ICT', { force: true })
            cy.get('[crn="ICT-word-processing-test"]').contains('Manage').click({ force: true })
            cy.get('.course_title').contains('ICT Word Processing Essentials Test').should('be.visible')
            cy.get('[data-cy=desk_copy] > .d-inline-block').click({ force: true })
            cy.get('[data-cy=manage_as_instructor]').click()
        })
        cy.get('[data-cy=track]').click({ force: true })
        cy.get('[data-cy=analytics_track_cy]').click({ force: true })
        cy.get('.dropdown-item').contains("Certificates")
    });
});