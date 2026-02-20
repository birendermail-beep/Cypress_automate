/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10612
@story_id: 14957
@story_name: LMS_student_canvas_instructor_assignment
@path: final/7761
@test_case_name: LMS_student_canvas_instructor_assignment.js
@description:
@test_steps:

^test case Canvas area
- Visit the Canvas page
- Input email id
- Input password
- Click on login
- Click on uCertify: Grade Sync card
- Click on assignments
- Assignment will be open

@result:
- Assignment will be open.
 */

describe('Canvas instructor assignment', function() {
    it('Canvas instructor assignment', function() {
        cy.fixture('global').then(data => {

            // Accessing external website.
            cy.visit('https://canvas.instructure.com/')
        })
        cy.get('#pseudonym_session_unique_id').type('shashank.gupta@ucertify.com', {force: true})
        cy.get('#pseudonym_session_password').type('ucertify', {force: true})
        cy.get('button').contains('Log In').click()
        cy.get('.ic-DashboardCard__link span').contains('uCertify: Grade Sync').click({force: true})
        cy.get('.assignments').click({force: true})
    })
});