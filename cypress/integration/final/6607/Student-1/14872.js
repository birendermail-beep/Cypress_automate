/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14872
@story_name: Bulk access enroll
@path: final/6607/Student
@test_case_name: Bulk access enroll
@description: Opening the bulk access enroll
@test_steps:

^Bulk access enroll
-Open the my library.
-Click on the Admin tab.
-Click on enroll sub tab.
-Click on the Multiple enroll radio button.
-Change the org from the right side select box to (The Training Room)
-Click on the multiple enroll.
-Fill the required values then click on next.

^Bulk access email
-Login on ocps.ucertify.com.
-Open my library.
-Click on my group.
-Click on the arrow dropdown button of action button.
-Click on the Manage user.
-Fill the comma separated emails.
-click on Next button.

@test_data: n/a
@result: Opening the Bulk access enroll
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Bulk training enroll', function() {
    it('Opening bulk training enroll page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
            cy.get('[intro-id="administrator"]').contains('Admin').click({force:true});
            cy.visit(data.url + "/educator/admin.php?func=enroll_students&org_id=00WwL");
        })
        cy.get("#org_id").select("The Training Room", { force: true });
        cy.get('#multiple_enroll_radio').check({ force: true });
        cy.get('#teacher_enroll_radio').check()
        cy.get('#multiple_enroll_radio').check({ force: true });
        cy.fixture('global').then(data => {
            cy.get("#multiple_email").clear({force: true}).type(data.author_email[1] + ",Surya Mani,Singh,12345,12345678," + data.author_email[3] + ",Shashank,Gupta,220-901-complete");
        })
        cy.get("#parse_bulk").click();
    })
    it('Opening the bulk access email page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.website[0] + "/?func=get_course_list&show=courses");
        })
        cy.get('[intro-id="my_user_gorups"]').click().then(() => {
            cy.get("#groups_list > li:nth-child(1)").click();
        });

        cy.get("#user_group_report > tbody > tr:nth-child(1) > td:nth-child(5) > div > span:nth-child(2) > div").click().then(() => {
            cy.get("#user_group_report > tbody > tr:nth-child(1) > td:nth-child(5) > div > span:nth-child(2) > div > ul > li").contains("Manage Users").click();
        })
        cy.fixture('global').then(data => {
            cy.get("#multiple_email").clear().type(data.auditor_email[0], data.author_email[1]);
        })
        cy.get("#parse_bulk").click();
    })
})