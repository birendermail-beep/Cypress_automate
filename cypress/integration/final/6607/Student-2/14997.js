/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14997
@story_name: Proctor Score
@path: final/6607/Student
@test_case_name:Proctor Score
@description:
@test_steps:

^pe-proctor_passing_score
- Visit to website.
- Login into website.
- Go to my library
- search course  word-processing-t and click manage button
- Click on  open desk copy  and proctor login
- click on test button and click on proctor log in
-take test and click end test 

^proctoru schedule exam page
-Login to ucertify.com
-Open the following url.(https://www.ucertify.com/?func=proctor_exams&action=edit_exam).

@test_data:n/a
@result: proctor score show 
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {

    it('pe-proctor_passing_score', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.website[0] + '/?func=get_course_list&show=courses')
            cy.get('#search_course').clear({ force: true }).type('word-processing-t', { force: true })
            cy.get('[crn="ICT-word-processing-test"]').contains('Manage').click({ force: true })
            cy.get('[data-cy=desk_copy] > .d-inline-block').click({ force: true })
        })
        cy.get('[data-cy="practice_tests"]').click({ force: true })
        cy.get('[data-cy="test_tests"]').eq(0).click()
        cy.get('#test_mode').click()
        StudentPage.endTest()
    })
    it('Opening the Study Planner livelab page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=proctor_exams&action=edit_exam");
        })
        cy.get("h3").contains("ProctorU: Schedule Proctoring Exam");
    })
})