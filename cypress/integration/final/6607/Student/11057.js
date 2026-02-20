/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 11057
@story_name: Activity Report
@path: final/6607/Student
@test_case_name: Activity Report
@description: We will open Table of Content (TOC), of any book
@test_steps:

^Activity report of user
-Open the ocps.ucertify.com
-Open the my library.
-Click on the My group.
-Select any group.
-Click on the Action dropdown button.
-Click on the Activity report.
-Select course. (Assessment & Skill Building)
-Click on Submit button

^time_spent_report
-Go the student course Dashboard
-Click on the study Planner 
-Go to activity time spent report to view if one can see time spent in camparison with different domains

@test_data: n/a
@result: show the activity report
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Activity report of user', function() {
    it('time_spent_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy=analytics]').click({ force: true })
        cy.get('#module_report').click()
    })
    it('Opening the activity report page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.fixture('global').then(data => {
            cy.visit(data.website[0] + "/?func=get_course_list&show=courses");
        })
        cy.contains("My Groups").click({ force: true });
        cy.get("#user_group_report > tbody > tr:nth-child(1) > td:nth-child(1) > div > label").click({ force: true });
        cy.get("#user_group_settings").click().then(() => {
            cy.get("ul > li").contains("Activity Report").click();
        })
        cy.get("#user_course_code1").select("APP-Training", { force: true });
        cy.get("#showClassGroupData").click();
    })
})