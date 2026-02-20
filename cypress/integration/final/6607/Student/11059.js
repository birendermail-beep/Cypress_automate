/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 11059
@story_name: Update User Information
@path: final/6607/Student
@test_case_name: Update User Information
@description: opening the 3d object modal page
@test_steps:
^Update user information
-Login on ucertify.com as admin.
-Open the following url.(https://www.ucertify.com/admin/admin_voucher.php?action=edit&voucher_code=9YTU8NXWJ986XD6G).
-Change the value of user email.

^3d object
-visit the website
-login into page
-visit the utils page
-Click on the 3D Objects
-Click on any object.

@test_data:n/a
@result:page open   
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Update user information', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('Opening the update user info modal page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_voucher.php?action=edit&voucher_code=9YTU8NXWJ986XD6G");
            cy.get("#user_email").clear().type(data.auditor_email[0]);
        })
        cy.get("body").click().then(() => {
            cy.get('#voucher_edit').should("be.visible")
        })

    })
    it('Opening the 3d object modal page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/utils");
        })
        cy.contains("3D Objects").click({ force: true });
        cy.contains("BNC Barrel Connector").click();
    })

})