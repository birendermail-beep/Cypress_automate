/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15229
@story_name: coverage_row
@path: final/Create
@test_case_name: coverage_row
@description: Create area
@test_steps: 
^coverage page
1. Login to ucertify.com as Author.
2. Open the following link.
(https://www.ucertify.com/author/coverage_compare.php)
3. Select any course from first course.
4. Click on the search icon button.
5. Select "Project List" option from modal.
6. In search box type "testing".
7. Click on the Search button.
8. Select any course by click on radio button.
9. Click on Save button.
10. Click on load button.

@test_data: N/A.
@result: Opening the coverage_row page.
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
        cy.wait(5000);
        cy.get("#search").clear().type("testing").then(() => {
            cy.get("#search_course").click();
        })
        cy.get('#_1').click({ force: true }).then(() => {
            cy.get("#select_course").click();
        })
        cy.get("#load_butn").click()
    })
})