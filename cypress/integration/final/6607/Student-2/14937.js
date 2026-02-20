/*
@author: Anurag Chaurasia
@master_project_id: 6607
@phase_id :
@story_id: 14937
@story_name: change password
@path: final\6607\Student
@test_case_name: change password
@description : To show manage password portal
@test_steps:

^pe-change_password
-Login in ucertify.com
-Go to my profile
-Click on change password

^test show To show manage password portal
- manage password 

^test case of manage password via old password
- Login In ucertify portal
- Go to my profile
- click on manage password option

@test_data: Login credential.
@result: manage password 
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('pe-change_password', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/?func=get_course_list&show=courses')
            })
            cy.get('[data-cy= "myprofile"]').click({ force: true })
            cy.get('[data-cy= "manage-password"]').click()
        })
        //To check old password condition 
    it('To check old password in change password field', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/user_login.php")
            cy.get('[data-cy=admin_user_login]').clear({ force: true }).type(data.author_email[7], { force: true });
            cy.get('[data-cy=admin_login_submit]').click();
            cy.visit(data.url + "/myprofile.php?func=myprofile")
            cy.get('[data-cy=manage-password]').click();
        })
    })
})