/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15225
@story_name: author_media_update_image
@path: final/Create
@test_case_name: author_media_update_image
@description: Create area
@test_steps: 
^coverage page
-Login to ucertify.com as Author.
-Open the following link.(https://www.ucertify.com/author/coverage_compare.php?first_course_json=%7B%2203jai%22%3A%22testing_course%22%7D&first_course=03jai&first_course_version=&second_course_json=&second_course=&second_course_version=&func=load_both_course&change_test_select=)

^coverage page1
-Login to ucertify.com as Author.
-Open the following link.(https://www.ucertify.com/author/coverage_compare.php)
-Select any course from second course.
-Click on the Load button.

^coverage page2
-Login to ucertify.com as Author.
-Open the following link.(https://www.ucertify.com/author/coverage_compare.php)
-Select any course from first course.
-Click on the search icon button.
-Select "Project List" option from modal.
-In search box type "testing".
-Click on the Search button.
-Select any course by click on radio button.
-Click on Save button.
- Click on load button.

@test_data: N/A.
@result: Opening the Coverage page.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('coverage compare', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('test the coverage compare page', function() {
        cy.fixture('global').then(data => {
        cy.visit(data.url + '/educator/project/coverage_compare.php?first_course_json=%7B%2203jai%22%3A%22testing_course%22%7D&first_course=03jai&first_course_version=&second_course_json=&second_course=&second_course_version=&func=load_both_course&change_test_select=');
        })
        cy.get("#coverage_compare_form").should('be.visible');
    })
    it('test the coverage compare page1', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/coverage_compare.php');
        })
        cy.get("#second_course").select("9A0-077 Adobe FrameMaker 8.0 ACE", { force: true });
        cy.get("#load_butn").click();
    })
    it('test the coverage compare page2', function() {
        cy.fixture('global').then(data => {
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
        cy.get('#_1').click({ force: true }).then(() => {
            cy.get("#select_course").click();
        })
        cy.get("#load_butn").click()
    })
})