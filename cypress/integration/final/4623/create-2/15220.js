/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15220
@story_name: coverage_edit
@path: final/Create
@test_case_name: coverage_edit
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
-Click on GUID given in table.

@test_data: N/A.
@result: Opening the export qti question page.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('coverage edit', function() {
    it('test the coverage edit page', function() {
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
        cy.get('#search_course').click().then(() => {
            cy.get('#_2').click();
            cy.get('#select_course').click();
        })
        cy.get("#load_butn").click().then(() => {
            cy.get("#test_checkbox > tr:nth-child(1) > td:nth-child(2)  a").click()
        })
    })
})