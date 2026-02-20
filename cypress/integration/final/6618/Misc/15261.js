/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: student_survey_footer
@Test_Case_Name: student_survey_footer.js
@description: Go to the utils and student survey footer
@test_steps: 
^Test case of student survey footer in utils
- Visit the website
- Go to the utils area.
- Show the many options and click the "start" button in "student survey" option.

@test_data: N/A
@result:
    -successfully open the student survey page and scroll down.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Student Survey', function() {

    it('Display the managers name', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
            cy.get(':nth-child(26) > :nth-child(3) > .btn').click();
        })
    })
})