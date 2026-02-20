/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15222
@story_name: exam_obj_version_modal
@path: final/Create
@test_case_name: exam_obj_version_modal
@description: Create area
@test_steps: 
^Coverage page
-Login on ucertify.com as author.
-Open this url.(https://www.ucertify.com/author/coverage_compare.php)
-Select any course from "First course".
-Then click on search icon.
-Select a course by clicking on radio button.
-Click on save button.
-Click on Load button.
-Click on the Exam Objective button.
-lick on the Version history from the bottom toolbar.

@test_data: N/A.
@result: Opening the exam objective version history modal.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('version history modal', function() {
    it('test the version history modal page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/project/coverage_compare.php');
        })
        cy.get("#first_course").select("9A0-077 Adobe FrameMaker 8.0 ACE", { force: true }).then(() => {
            cy.get("#first_course_open").click();
        })
        cy.wait(10000);
        cy.get("#selectOthers").select("Project List", { force: true });
        cy.get("#search").clear().type("testing").then(() => {
            cy.get("#search_course").click();
        })
        cy.get('[course_code="03jai"]').check({force: true}).then(() => {
            cy.get("#select_course").click();
        })
        cy.get("#load_butn").click();
        cy.contains("Exam Objective").
        should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get("#restore_btn").click();
    })
})