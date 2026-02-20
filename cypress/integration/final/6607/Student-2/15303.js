/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 15303
@story_name: Test My Profile Page
@path: final/6607/Student
@test_case_name: Test My Profile Page
@description: Opening the ebook slide page
@test_steps:

^test case of ebook slide
-visit the website
-login into page
-Open the my library.
-click on my Profile
-fill the data
-click on save

@test_data:N/A  
@result: My Profile page
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Complete uCertify Testing', function() {
    /** My Profile Page Test */
    it('Test My Profile Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/myprofile.php?func=myprofile');
        })
        cy.get('#first_name').clear().type('Automation')
        cy.get('#last_name').clear().type('Testing')
    })
});