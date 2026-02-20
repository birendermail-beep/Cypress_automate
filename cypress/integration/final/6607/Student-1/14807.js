/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14807
@story_name:enroll student
@path: final/6607/Student
@test_case_name: enroll student
@description: Opening the Enroll student page
@test_steps:
^Opening the Enroll student page
-visit the website
-login to website
-Open the following rul.
-url + "/start/amazon.php?func=enroll_student&email=" + data.auditor_email[0] + "&course_code=02clr&course=uCertify%20Features"

@test_data:n/a
@result: Enroll student page
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Enroll student', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('Opening the Enroll student page', function() {
        cy.fixture('global').then(data => {
            cy.fixture('global').then(data => {
                cy.visit(data.url + "/start/amazon.php?func=enroll_student&email=" + data.auditor_email[0] + "&course_code=02clr&course=uCertify%20Features");
            })
        })
    })
})