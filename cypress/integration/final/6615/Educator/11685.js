/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 11685
@story_name: Class Performance Report
@path: final/Educator
@test_case_name: Class Performance Report.js
@description: 
@test_steps: 
^show the class performance report
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on analytics
-click on class performence

@test_data: n/a
@result: show the class performance report
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it('track area all tabs', function() {
        cy.fixture('global').then(data => {
                cy.visit(data.url);
                Navbar.clickOnLogin();
                LoginPage.loginPage(login_username, login_password);
                InstructorPage.visitCourseSupport();
            })
            //track button
        cy.get('[data-cy=track]').click({ force: true })
            //search icon tab
        cy.get('[data-cy=search_btn_cy]').click({ force: true })
            //lessons tab
        cy.get('[data-cy=chapterwise_performance_track_cy]').click({ force: true })
            //roster tab
        cy.get('[data-cy=roster_track_cy]').click({ force: true })
            // labs of student and table view
        cy.get('[data-cy=labs_track_cy]').click({ force: true }).then(() => {
            cy.get('[data-cy=table_labs_track_cy]').click({ force: true })
        })
        cy.get('[data-cy=labs_track_cy]').click({ force: true }).then(() => {
                cy.get('[data-cy=student_labs_track_cy]').click({ force: true })
            })
            //virtual lab tab
            //cy.get('[data-cy=virtual_labs_track_cy]').click({ force: true })
            //practice tabs
        cy.get('[data-cy=track_progress_cy]').click({ force: true })
            //prepengine of student view and table view
        cy.get('[data-cy=prepengine_cy]').click({ force: true }).then(() => {
            cy.get('[data-cy=prepengine_table_view_cy]').click({ force: true })
        })
        cy.get('[data-cy=prepengine_cy]').click({ force: true }).then(() => {
                cy.get('[data-cy=prepengine_student_view_cy]').click({ force: true })
            })
            //gradebook tab
        cy.get('[data-cy=gradebook_track_cy]').click({ force: true }).then(() => {
                cy.get('[data-cy=gradebook__dropdown_cy]').click({ force: true })
            })
            //all analytics tab of dropdown
        cy.get('[data-cy=analytics_track_cy]').click({ force: true })
            //competency btn
        cy.get('[data-cy=competency_analytics_cy]').click({ force: true })
            //class performance btn
        cy.get('[data-cy=performance_analytics_cy]').click({ force: true })
            //test analysis btn
        cy.get('[data-cy=test_analytics_cy]').click({ force: true })
            //activities btn
        cy.get('[data-cy=activities_analytics_cy]').click({ force: true })
            //class ranking report btn
        cy.get('[data-cy=class_ranking_analytics_cy]').click({ force: true })
            //study plan btn
        cy.get('[data-cy=study_plan_analytics_cy]').click({ force: true })
            //export
        InstructorPage.exportButtonEducator()
    })
})