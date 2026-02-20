/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: n/a
@story_id: 11575
@story_name: Sync Grade Logs
@path: final/7761/Grade
@test_case_name: Sync Grade Logs
@description:N/A
@test_steps: 

^test case grade sync
-login to page
-click on uCertify_grade_sync
-click on assignment tab
-click on all test items Card, Quiz, Exercise, Lab, Pre-assessment, Post-assessment, Virtual lab, Assessment, Ebook, Dashboard

^Monitor sync grade logs
-Use below URL to load the report 
-URL: https://www.ucertify.com/educator/grade_send.php?func=send_grade

^Get section list of selected course 
-Click on Advance Search button
-You will see "ALL" option is already selected in status DDL
-Select course form Course List DDL

^Get all student list of the selected section 1
-Click on Advance Search button
-You will see "ALL" option is already selected in status DDL
-You already selected a couser in last step
-Select a section from the Section List

^Get all student list of the selected section 2
-Click on Advance Search button
-You will see "ALL" option is already selected in status DDL
-You already selected a couser in last step
-Select a section from the Section List

^Get all student list of the selected section 3
-Click on Advance Search button
-You will see "ALL" option is already selected in status DDL
-You already selected a couser in previous step
-You already selected a section in previous step
-Do not select student form student list
-Click the Search button

^Get all student list of the selected section 4
-Click on Advance Search button
-You will see "ALL" option is already selected in status DDL
-You already selected a couser in previous step
-You already selected a section in previous step
-Select any specific student
-Select the status "Success"
-Click the Search button

^Get all student list of the selected section 5
-Click on Advance Search button
-You will see "ALL" option is already selected in status DDL
-You already selected a couser in previous step
-You already selected a section in previous step
-Select any specific student
-Select the status "Success"
-Click the Search button

^Get all student list of the selected section between two days
-Click on Advance Search button
-You will see "ALL" option is already selected in status DDL
-You already selected a couser in previous step
-You already selected a section in previous step
-Select any specific student
-Select the status "Success"
-Select Start date and End date
-Click the Search button

@test_data: n/a
@result: Load assignment and sync grade
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("grade sync area", function () {
    beforeEach("this is login", function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            //Load sync grade log report
            cy.visit(data.url + "/educator/grade_send.php?func=send_grade");
            InstructorPage.advSearch()
            cy.wait(7000);
        })
    });
    it("Apply adavnce search filter all", function () {
        cy.get('[data-cy="sync_status_cy"]').select("All", { force: true });
        cy.get('[data-cy="submit_btn_cy"]')
            .contains("Search")
            .click();
    });
    it("Apply adavnce search filter couse list", function () {
        cy.get('[data-cy="course_list_cy"]').select("CISSP - Certified Information Systems Security Professional  2015 [CISSP-2015]", {
            force: true
        });
        cy.wait(1000);
        cy.get('[data-cy="sync_status_cy"]').select("All", { force: true });
        cy.get('[data-cy="submit_btn_cy"]')
            .contains("Search")
            .click();
    });
    it("Apply adavnce search filter section", function () {
        cy.get('[data-cy="course_list_cy"]').select("CISSP - Certified Information Systems Security Professional  2015 [CISSP-2015]", {
            force: true
        });
        cy.wait(1000);
        cy.get('[data-cy="section_list_cy"]').select("TestingAutomation", {
            force: true
        });
        cy.wait(1000);
        cy.get('[data-cy="sync_status_cy"]').select("All", { force: true });
        cy.get('[data-cy="submit_btn_cy"]')
            .contains("Search")
            .click();
    });
    it("Apply adavnce search filter section submit", function () {
        cy.get('[data-cy="course_list_cy"]').select("CISSP - Certified Information Systems Security Professional  2015 [CISSP-2015]", {
            force: true
        });
        cy.wait(1000);
        cy.get('[data-cy="section_list_cy"]').select("TestingAutomation", {
            force: true
        });
        cy.wait(1000);
        cy.get('[data-cy="sync_status_cy"]').select("All", { force: true });
        cy.get('[data-cy="submit_btn_cy"]')
            .contains("Search")
            .click();
    });
    it("Apply adavnce search filter with select student", function () {
        cy.get('[data-cy="course_list_cy"]').select("Automation Testing [5TXCUHIPAYJ7SYNM]", {
            force: true
        });
        cy.wait(1000);
        cy.get('[data-cy="section_list_cy"]').select("Instructor Area Testing", {
            force: true
        });
        cy.wait(1000);
        cy.get("#user_list").select("Anirudha Pratap", { force: true });
        cy.get('[data-cy="sync_status_cy"]').select("Success", { force: true });
        cy.get('[data-cy="submit_btn_cy"]')
            .contains("Search")
            .click();
    });
    it.only("Apply adavnce search filter with select student and date", function () {
        cy.get('[data-cy="course_list_cy"]').select("Automation Testing [5TXCUHIPAYJ7SYNM]", {
            force: true
        });
        cy.wait(1000);
        cy.get('[data-cy="section_list_cy"]').select("Instructor Area Testing", {
            force: true
        });
        cy.wait(1000);
        cy.get("#user_list").select("Anirudha Pratap", {
            force: true
        });
        cy.wait(1000);
        cy.get('[data-cy="sync_status_cy"]').select("Success", { force: true });
        cy.get('[data-cy="start_date_cy"]').click();
        cy.get(".table-condensed > tbody > :nth-child(3) > :nth-child(4)").click()
        cy.get('[data-cy="end_date_cy"]').click();
        cy.get(".table-condensed > tbody > :nth-child(3) > :nth-child(6)").click()
        cy.get('[data-cy="submit_btn_cy"]')
            .contains("Search")
            .click();
    });
});