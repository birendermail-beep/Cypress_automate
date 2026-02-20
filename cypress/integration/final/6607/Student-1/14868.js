/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14868
@story_name: alternate email table
@path: final/6607/Student
@test_case_name: alternate email table
@description: Opening the alternate email page
@test_steps:

^alternate email table
-visit the website
-Open the my Profile.
-Click on the Add button of the email

@test_data:n/a
@result:Opening the alternate email page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('alternate email page', function() {

    it('Opening the alternate email page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/myprofile.php?func=myprofile");
        })
        cy.get("#alternate_email").click();
    })
})