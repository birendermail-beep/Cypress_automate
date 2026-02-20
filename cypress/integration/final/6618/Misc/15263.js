/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: 15263
@Test_Case_Name: survey_form.js
@description: Open the survey page
@test_steps: 
^Test case of student survey form
- Visit the website
- Go to the survey page and click on this link "forms.php?func=survey_form"

@test_data: N/A
@result: Successfully open the survey page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Website', function() {

    it('Open the survey page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(3000);
            cy.visit(data.url + '/forms.php?func=survey_form')
        });

    })
})