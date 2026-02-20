/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14870
@story_name: Login extended option
@path: final/6607/Student
@test_case_name: Login extended option
@description: Opening the Login extended option page 
@test_steps:

^Login extended option
-Login to the ucertify.com
-Open the following url:(https://www.ucertify.com/login.php?func=resetpassword)

@test_data:n/a
@result: Opening the Login extended option page
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Login extended option page', function() {

    it('Opening the Login extended option page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/login.php?func=resetpassword");
        })
    })
})