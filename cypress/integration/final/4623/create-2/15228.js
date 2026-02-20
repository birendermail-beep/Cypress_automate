/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15228
@story_name: author_media_update_image
@path: final/Create
@test_case_name: author_media_update_image
@description: Create area
@test_steps: 
^coverage page
-Login to ucertify.com as author.
-Open the following url.(https://www.ucertify.com/author/coverage_compare.php).
-Click on the Exam Objective button.

^coverage page1
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
- Click on the Exam Objective button.

^coverage page2
-Login to ucertify.com as author.
-Open the following url.(https://www.ucertify.com/author/exam_objective_mapping.php?course_code=02GcK&edit=1&from_myproject=1).

@test_data: N/A.
@result: Opening the Exam objective mapping page
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('coverage compare', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/project/coverage_compare.php');
        })
    })
    it('test the coverage compare page', function() {
        cy.contains("Exam Objective").click({ force: true })
    })
    it('test the coverage compare page', function() {
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
        cy.get("#load_butn").click();
        cy.contains("Exam Objective").click({ force: true })
    })
    it('test the coverage compare page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/exam_objective_mapping.php?course_code=02GcK&edit=1&from_myproject=1');
        })
    })
})