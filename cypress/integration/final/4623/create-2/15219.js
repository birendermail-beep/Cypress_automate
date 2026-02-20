/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15219
@story_name: export_qti_question
@path: final/Create
@test_case_name: export_qti_question
@description: Create area
@test_steps: 
^Coverage page
-Login to ucertify.com as Author.
-Open the following link.(https://www.ucertify.com/author/coverage_compare.php)
-Click on the Export QTI Document button.

@test_data: N/A.
@result: Opening the export qti question page.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index' 
describe('coverage compare', function() {
    it('test the coverage compare page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/project/coverage_compare.php');
        })
        cy.get("#export_qti_doc").click().then(() => {
            cy.get("#qti_modal_export").should('be.visible');
        })
    })
})