/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14871
@story_name: Enroll in bulk
@path: final/6607/Student
@test_case_name: Enroll in bulk
@description: Opening the bulk access enroll
@test_steps:

^Enroll in bulk
-visit the website
-login into page
-Open the my library.
-Click on the Admin tab.
-Click on enroll sub tab.
-Change the org from the right side select box to (uCertifyTest)
-Click on the multiple enroll.
-Fill the required values then click on next.

@test_data: n/a
@result: Opening the Enroll in bulk
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Bulk access enroll', function() {

    it('Opening Bulk access enroll page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
            cy.get('[intro-id="administrator"]').contains('Admin').click({ force: true });
            cy.visit(data.url + "/educator/admin.php?func=enroll_students&org_id=00WwL");
        })
        cy.get("#org_id").select("uCertifyTest", { force: true });
        cy.get('#enroll_as_multiple').check({ force: true });
        cy.fixture('global').then(data => {
            cy.get("#multiple_email").clear({ force: true }).type(data.auditor_email[0] + ",Ankit,Yadav,220-901-complete", { force: true });
        })
        cy.get("#parse_bulk").click({ force: true });
    })
})