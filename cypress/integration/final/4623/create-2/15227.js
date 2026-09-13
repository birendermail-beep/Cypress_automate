/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15227
@story_name: test_assignment_quick
@path: final/Create
@test_case_name: test_assignment_quick
@description: Create area
@test_steps: 
^coverage compare
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
- Click on the Test Assignment button.
- choose the first radio button.
- select "1" from the first select box.
- Click on the assign button

^coverage compare2
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
- Click on the Test Assignment button.
- choose the first radio button.
- Click on the assign button

@test_data: N/A.
@result: Opening the test_assignment_quick page
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('test assignment quick', function() {
    it('test the test assignment quick page', function() {
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
        cy.get("#search").clear().type("testing").then(() => {
            cy.contains('pen-test').click({ force: true });
        })
        cy.get('#_1').click({ force: true }).then(() => {
            cy.get("#select_course").click();
        })
        cy.get("#load_butn").click().then(() => {
            cy.get('[href="test_assignment_quick.php?project_id=&course_code=03fog"]').invoke("attr", 'target', "_self");
            cy.get('[href="test_assignment_quick.php?project_id=&course_code=03fog"]').click();
        })
        cy.get("#e").check();
        cy.get('[for="e"] > select').select("1");
        cy.get('[value="Assign"]').click();
    })
    it('test the test assignment quick page', function() {
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
        cy.get("#search").clear().type("testing").then(() => {
            cy.contains('pen-test').click({ force: true });
        })
        cy.get('#_1').click({ force: true }).then(() => {
            cy.get("#select_course").click();
        })
        cy.get("#load_butn").click().then(() => {
            cy.get('[href="test_assignment_quick.php?project_id=&course_code=03fog"]').invoke("attr", 'target', "_self");
            cy.get('[href="test_assignment_quick.php?project_id=&course_code=03fog"]').click();
        })
        cy.get('[value="Assign"]').click();
    })
})