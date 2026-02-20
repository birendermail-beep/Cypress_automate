/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15248
@story_name: Proctor
@path: final/Misc
@test_case_name: proctor    
@description: N/A   
@Test Steps: 
^proctor
-Go to the given url https://www.ucertify.com/ext/pro_test/index.php?func=campus_report
-Click on action button
-Click on create proctor test

@test_data: n/a
@result: test create form will open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Miscellaneous', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/ext/pro_test/index.php?func=campus_report")
        })
    })
    it('proctor', function() {
        cy.get('#actions_btn > .d-lg-inline-block').click()
        cy.get('#create_modal').click({ force: true })
    })
    it('Display Schedule proctoring exam Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "?func=proctor_exams&action=step2");

        })
    })
})