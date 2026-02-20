/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14891
@story_name: LTI Data
@path: final/6607/Student
@test_case_name: LTI Data
@description:
@test_steps:
^lti_data_sync
-go to URL: https://canvas.instructure.com/courses/1617583 
-https://www.screencast.com/t/5CJAnTzz

@test_data: n/a
@result: page will open
*/

describe('Student Area', function() {
    it('pe-grade_sync_modal', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[9])
            cy.get('#pseudonym_session_unique_id').clear({ force: true }).type(data.author_email[3], { force: true })
        })
        cy.get('#pseudonym_session_password').clear({ force: true }).type('ucertify', { force: true })
        cy.get('.ic-Form-control > .Button').click({ force: true })
        cy.contains('uCertify: Grade Sync').click({ force: true })
    })
})