/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15221
@story_name: merge_coverage_table_modal
@path: final/Create
@test_case_name: merge_coverage_table_modal
@description: Create area
@test_steps: 
^Coverage page
-Login to ucertify.com as Author.
-Open the following link.(https://www.ucertify.com/author/coverage_compare.php)
-Click on the "Merge Chapter" button.

@test_data: N/A.
@result: Opening the merge coverage table modal
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index' 
describe('merge coverage modal', function() {
    it('test the merge coverage modal page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/project/coverage_compare.php');
        })
        cy.get("#merge_coverage_button").click().then(() => {
            cy.get("#merge_coverage_modal").should("be.visible");
        })
    })
})