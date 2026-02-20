/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14969
@story_name: Test History & Performance Analytics
@path: final/6607/Student
@test_case_name:Test History & Performance Analytics
@description:click review button of test history and report 
@test_steps:
^Dashboard > test history 
- Visit to website.
- Login into website.
- open dashboard of student area
- click review button of test history and report 

^test history > study planner
- Visit to website.
- Login into website.
- open dashboard of student area
- this is dublicate of Dashboard.study.planner test case id 

^test history > perform on practice test
- Visit to website.
- Login into website.
- open dashboard of student area
- you will see all practice test report in single page(this report describe that how much time take single question)

^activity time spent report
- Visit to website.
- Login into website.
- open dashboard of student area
- Click on Analytics.
- Click on activity time spent report.

^class ranking report
- Visit to website.
- Login into website.
- open dashboard of student area
- Click on Analytics.
- Click on Class ranking.

@test_data:n/a
@result: test history and performance page 
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('test history page', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                StudentPage.visitLOAplusCompleteCourse(data)
            })
        })
        //click review button of test history and report and all tabs
    it('test history and progress report and all tabs', function() {
        cy.get('[data-cy="analytics"]').click({ force: true })
        cy.get('#test_history').click({ force: true })
        cy.get('#performance').click({ force: true })
        cy.wait(5000)
        cy.get('#module_report').click({ force: true })
        cy.get('#test_history').click({ force: true })
    })
    it('this is dublicate of Dashboard.study.planner test case id ', function() {
        cy.get('[data-cy="analytics"]').click({ force: true })
    })
    it('you will see all practice test resport in single page(this report describe that how much time take single question)', function() {
        cy.get('[data-cy="analytics"]').click({ force: true })
        cy.get('#performance').click({ force: true })
        cy.get('#select2-test_session_id-container').click({ force: true })
    })
    it('activity time spent report', function() {
        cy.get('[data-cy="analytics"]').click({ force: true })
        cy.get('#module_report').click({ force: true })
    })
    it('class ranking report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=04Kst&class_code=05M7I");
        })
        cy.get('.text-primary').contains('Analytics').click({ force: true });
        cy.get('#class_ranking').click({ force: true });
    })
})