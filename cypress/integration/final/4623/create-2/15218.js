/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15218
@story_name: author_setting_modal
@path: final/Create
@test_case_name: author_setting_modal
@description: Create area
@test_steps: 
^coverage page
-Login on ucertify.com as author.
-Open this url.(https://www.ucertify.com/author/coverage_compare.php)
-Select any course from "First course".
-Then click on search icon.
-Select a course by clicking on radio button.
-Click on save button.
-Click on Load button.
-Click on Setting button

@test_data: N/A.
@result: Opening the author setting modal
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Author setting modal', function() {
    it('test the my author setting modal', function() {
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
            cy.get('.change_settings').click();
        })
    })
})