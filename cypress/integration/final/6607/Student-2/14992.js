/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14992
@story_name: All vendors
@path: final/6607/Student
@test_case_name: All vendors
@description:N/A    
@test_steps:
^All vendors
-Login on the ucertify.
-Open the home page.
-Open the following URL.(https://www.ucertify.com/courses/?action=all_vendor)

@test_data: n/a
@result: It will open the page of vendors.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('All vendors', function() {

    it('Opening all vendors page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/courses/?action=all_vendor");
        })
    })
})