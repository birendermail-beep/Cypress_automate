/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10909
@story_name: Track Lessons - Labs
@path: final/6615
@test_case_name: Track Lessons - Labs
@test_steps:
^Check the Student's score for Labs in Lessons tab
-Click on the Student's score for Labs in Lessons tab

@test_data: n/a
@result: Student's score for Labs shows up
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitSalesStaff()
        })
    })
    it('Check the Students score for Labs in Lessons tab', function() {
        cy.get('[data-cy=track]').click()
        cy.get('[aria-label="Lessons"] > .ml-sm').click()
        cy.get('.header_05Dj6 > :nth-child(5) > .pointer > .peity > circle').click()
    })
})